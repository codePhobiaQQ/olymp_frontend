import cn from 'classnames'
import cls from './MainScreen.module.css'
import Title, { TitleTheme } from '@shared/ui/Titles/Title'
import MainScreenCard, { CardSizeTheme } from '../../../shared/Card/Card'
import { cardsList } from '../model/data'
import LogoSvg from '@/components/shared/assets/svg/LogoSvg'
import Typography from '@/components/shared/ui/Typography/Typography'
import CircleArrowSvg from '@/components/shared/assets/svg/CircleArrowSvg'
import GradientBg from '@/components/common/GradientBg/ui/GradientBg/GradientBg'
import { Header } from '@/components/shared/Header'
import { HeaderTheme } from '@/components/shared/Header/ui/Header/Header'

interface MainScreenI {
	className?: string
}

const MainScreen = ({ className = '' }: MainScreenI) => {
	return (
		<div className={cn(className, cls.MainScreen)}>
			<Header theme={HeaderTheme.LIGHT} className={cls.Header} />
			<div className={cls.bg}>
				<GradientBg />
			</div>

			<div className={cn(cls.Content)}>
				<div className={cn(cls.TitleWrapper)}>
					<LogoSvg className={cn(cls.LogoTitle)} />

					<Title
						style={{ color: '#fff' }}
						theme={TitleTheme.H1_UPPERCASE}
						className={cn('m_t_30', cls.Title)}
						text='Система поддержки проведения интеллектуальных соревнований школьников'
					/>
				</div>

				<div className={cn(cls.CardsWrapper)}>
					{cardsList.map((card, index) => (
						<MainScreenCard
							data={card}
							key={index + 'title' + card.title}
							className={cls.Card}
							sizeTheme={CardSizeTheme.M}
						/>
					))}
				</div>

				<div className={cn(cls.MoreBtn)}>
					<Typography text='Узнать больше' />
					<CircleArrowSvg className={cn(cls.MoreBtnIcon)} />
				</div>
			</div>
		</div>
	)
}

export default MainScreen
