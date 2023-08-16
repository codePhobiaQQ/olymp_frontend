import cls from './NewsPage.module.css'
import cn from 'classnames'
import PageTitle from '@/components/shared/PageTitle/PageTitle'
import PageDescription from '@/components/shared/PageDescription/PageDescription'
import { __API__ } from '@/core/vars/vars'
import { Header } from '@/components/shared/Header'

export const NewsPage = () => {
	// useEffect(() => {
	// 	console.log('here')
	// }, [])
	// const fetchNews = async () => {
	// 	try {
	// 		const data = await axios.get(__API__ + 'olymp/wp-json/wp/v2/news')
	// 		console.log(data)
	// 	} catch (e) {
	// 		console.log(e)
	// 	}
	// }
	// fetchNews()
	// 	console.log('here')
	// }, [])

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
