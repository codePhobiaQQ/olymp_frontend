import cn from 'classnames'
import cls from './MainScreen.module.css'
import Title, { TitleTheme } from '@shared/ui/Titles/Title'
import MainScreenCard from '../../../shared/Card/Card'
import { cardsList } from '../model/data'
import LogoSvg from '@/components/shared/assets/svg/LogoSvg'

interface MainScreenI {
	className?: string
}

const MainScreen = ({ className = '' }: MainScreenI) => {
	return (
		<>
			<div className={cn(className, cls.MainScreen)}>
				<div className={cn(cls.Content)}>
					<LogoSvg className={cn(cls.LogoTitle)} />

					<Title
						style={{ color: '#fff' }}
						theme={TitleTheme.H1_UPPERCASE}
						className={cn('m_t_30', cls.Title)}
						text='Система поддержки проведения интеллектуальных соревнований школьников'
					/>

					<div className={cn(cls.CardsWrapper)}>
						{cardsList.map((card, index) => (
							<MainScreenCard data={card} key={index + 'title' + card.title} className={cls.Card} />
						))}
					</div>
				</div>
			</div>

			{/* <div className={cn(cls.MoreBtn)}>
				<AppLink
					to={'/about'}
					theme={AppLinkTheme.LINK_WITH_ARROW_XXL}
					style={{ color: '#fff' }}
					text='Подробнее об олимпиадах'
					className={cn('fz_40')}
				/>
			</div> */}
		</>
	)
}

export default MainScreen
