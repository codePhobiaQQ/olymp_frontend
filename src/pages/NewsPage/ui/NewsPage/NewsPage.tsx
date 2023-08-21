import cls from './NewsPage.module.scss'
import cn from 'classnames'
import PageTitle from '@shared/ui/PageTitle/PageTitle'
import PageDescription from '@shared/ui/PageDescription/PageDescription'
import { Header } from '@widgets/Header'
import { DynamicModuleLoader, ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { newsPageReducer } from '@pages/NewsPage/model/slice/newsPageSlice/newsPageSlice'
import { memo, useCallback, useEffect } from 'react'
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchNextNewsPage } from '@pages/NewsPage/model/services/fetchNextNewsPage/fetchNextNewsPage'
import { Page } from '@widgets/Page/ui/Page/Page'
import { NewsInfiniteList } from '@pages/NewsPage/ui/NewsInfiniteList/NewsInfiniteList'
import Footer from '@widgets/Footer/Footer'

const reducers: ReducersList = {
  newsPage: newsPageReducer,
}

const NewsPage = memo(() => {
  const dispatch = useAppDispatch()

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextNewsPage())
  }, [dispatch])

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
          filters
        </div>
        <div className={cn(cls.ContentListItems)}>
          <NewsInfiniteList />
        </div>
      </div>
    </section>
  )

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPart}>
        {content}
      </Page>
    </DynamicModuleLoader>
  )
})

export default NewsPage