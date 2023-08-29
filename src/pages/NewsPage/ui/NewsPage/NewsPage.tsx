import cls from './NewsPage.module.scss'
import cn from 'classnames'
import PageTitle from '@shared/ui/PageTitle/PageTitle'
import PageDescription from '@shared/ui/PageDescription/PageDescription'
import { DynamicModuleLoader, ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { newsPageReducer } from '@pages/NewsPage/model/slice/newsPageSlice/newsPageSlice'
import { memo, useCallback, useEffect } from 'react'
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSearchParams } from 'react-router-dom';
import { fetchNextNewsPage } from '@pages/NewsPage/model/services/fetchNextNewsPage/fetchNextNewsPage'
import { Page } from '@widgets/Page/ui/Page/Page'
import { NewsInfiniteList } from '@pages/NewsPage/ui/NewsInfiniteList/NewsInfiniteList'
import { NewsPageCategories } from '@features/fetchNewsCategories'
import { NewsCategoriesReducer } from '@features/fetchNewsCategories/model/slice/newsCategoriesSlice'
import { NewsFilters } from '@pages/NewsPage/ui/NewsFilters/NewsFilters'
import { initNewsPage } from '@pages/NewsPage/model/services/initNewsPage/initNewsPage'

const reducers: ReducersList = {
  newsPage: newsPageReducer,
  newsCategories: NewsCategoriesReducer,
}

const NewsPage = memo(() => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextNewsPage())
  }, [dispatch])

  useEffect(() => {
    initNewsPage(searchParams)
  }, [])

  const content = (
    <section className={cn(cls.NewsPage)}>
      <PageTitle text={'Новости'} />

      <PageDescription
        className={cn('m_t_10')}
        rightSideDescription={
          'Вообще, качество образования, обучения с детских лет, компетенции, навыки, умение работать в быстро меняющемся рынке (мы половину профессий нынешних через 30 лет потеряем), готовиться к постоянно меняющемуся миру всю жизнь <…> — вот это важнейшая вещь. '
        }
      />

      <div className={cn(cls.Content)}>
        <div className={cn(cls.Filters)}>
          <NewsFilters />
          <NewsPageCategories />
        </div>
        <div className={cn(cls.ContentListItems)}>
          <NewsInfiniteList />
        </div>
      </div>
    </section>
  )

  return (
    <DynamicModuleLoader removeAfterUnmount={false} reducers={reducers}>
      <Page onScrollEnd={onLoadNextPart}>
        {content}
      </Page>
    </DynamicModuleLoader>
  )
})

export default NewsPage