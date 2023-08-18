import cls from './NewsPage.module.css'
import cn from 'classnames'
import PageTitle from '@shared/ui/PageTitle/PageTitle'
import PageDescription from '@shared/ui/PageDescription/PageDescription'
import { Header } from '@widgets/Header'
import { DynamicModuleLoader, ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { newsPageReducer } from '@pages/NewsPage/model/slice/newsPageSlice/newsPageSlice'
import { memo } from 'react'

const reducers: ReducersList = {
  newsPage: newsPageReducer
}

const NewsPage = memo(() => {
  const content = (<>
    <Header />
    <section className={cn(cls.NewsPage)}>
      <PageTitle text={'Новости'} />
      <PageDescription
        className={cn('m_t_10')}
        rightSideDescription={
          'Вообще, качество образования, обучения с детских лет, компетенции, навыки, умение работать в быстро меняющемся рынке (мы половину профессий нынешних через 30 лет потеряем), готовиться к постоянно меняющемуся миру всю жизнь <…> — вот это важнейшая вещь. '
        }
      />
    </section>
  </>)

  return (
    <DynamicModuleLoader removeAfterUnmount={true} reducers={reducers}>
      {content}
    </DynamicModuleLoader>
  )
})

export default NewsPage