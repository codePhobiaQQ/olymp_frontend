import cn from 'classnames'
import styles from './MainScreen.module.css'
import AppImage from '../../shared/ui/AppImage/AppImage'

import bgImage from './../../../assets/images/olymps/bg/OlympsBgDesctop.jpg'
import Button, { ButtonTheme } from '../../shared/ui/Button/Button'
import Title, { TitleTheme } from '../../shared/ui/Titles/Title'
import Card from '../../shared/Card/Card'

interface MainScreenI {
	className?: string
}

const MainScreen = ({ className = '' }: MainScreenI) => {
	return (
		<div className={cn(className, styles.MainScreen)}>
			<div className={cn(styles.bg)}>
				<AppImage src={bgImage} />
			</div>

			<div className={cn(styles.Content)}>
				<Button theme={ButtonTheme.OUTLINE_TRANSPARENT}>Олимпиады</Button>
				<Title
					style={{ color: '#fff' }}
					theme={TitleTheme.H1_UPPERCASE}
					className={cn('m_t_30')}
					text='Система поддержки проведения интеллектуальных соревнований школьников'
				/>

				<div className={cn(styles.CardsWrapper)}>
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	)
}

export default MainScreen
