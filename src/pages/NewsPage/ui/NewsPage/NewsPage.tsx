import cls from './NewsPage.module.css'
import cn from 'classnames'
import PageTitle from '@shared/ui/PageTitle/PageTitle'
import PageDescription from '@shared/ui/PageDescription/PageDescription'
import { __API__ } from '@shared/vars/vars'
import { Header } from '@widgets/Header'

export const NewsPage = () => {
  return (
    <>
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
    </>
  )
}

export default NewsPage
