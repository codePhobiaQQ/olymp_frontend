import cls from './CardsScreen.module.css'
import cn from 'classnames'

export enum CardsScreenTheme {
	ONLY_CARDS = 'only_cards',
	CARDS_WITH_TITLE = 'cards_with_title',
}

interface CardsScreenI {
	className?: string
	theme?: CardsScreenTheme
}

const CardsScreen = (props: CardsScreenI) => {
	const { className = '', theme = CardsScreenTheme.ONLY_CARDS } = props

	if (theme == CardsScreenTheme.ONLY_CARDS) {
		return (
			<div className={cn(className, cls.CardsScreen)}>
				<div className={cls.CardsdWrapper}>1234</div>
			</div>
		)
	}
}

export default CardsScreen
