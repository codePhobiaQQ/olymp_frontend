import Card from '@/components/shared/Card/Card'
import { DataTypes, isRoutesActionScreenType } from '../../model/types/DataTypes'
import cls from './CardsScreen.module.css'
import cn from 'classnames'

export enum CardsScreenTheme {
	LINK_CARDS = 'link_cards',
	LINK_CARDS_WITH_TITLE = 'link_cards_with_title',
	ONLY_CARDS = 'only_cards',
	CARDS_WITH_TITLE = 'cards_with_title',
}

interface CardsScreenI<T extends CardsScreenTheme> {
	className?: string
	theme?: T
	data?: DataTypes
}

const CardsScreen = <T extends CardsScreenTheme>(props: CardsScreenI<T>) => {
	const { className = '', theme = CardsScreenTheme.ONLY_CARDS, data } = props

	if (theme == CardsScreenTheme.LINK_CARDS) {
		return (
			<div className={cn(className, cls.CardsScreen)}>
				<div className={cls.CardsdWrapper}>
					<ShowCardsComponent data={data} />
				</div>
			</div>
		)
	}

	if (theme == CardsScreenTheme.LINK_CARDS_WITH_TITLE) {
		return (
			<div className={cn(className, cls.CardsScreen)}>
				<div className={cls.CardsdWrapper}>1234</div>
			</div>
		)
	}

	if (theme == CardsScreenTheme.ONLY_CARDS) {
		return (
			<div className={cn(className, cls.CardsScreen)}>
				<div className={cls.CardsdWrapper}>
					<ShowCardsComponent data={data} />
				</div>
			</div>
		)
	}

	if (theme == CardsScreenTheme.CARDS_WITH_TITLE) {
		return (
			<div className={cn(className, cls.CardsScreen)}>
				<div className={cls.CardsdWrapper}>1234</div>
			</div>
		)
	}
}

interface ShowCardsComponentI {
	data?: DataTypes
}

const ShowCardsComponent = ({ data }: ShowCardsComponentI) => {
	if (isRoutesActionScreenType(data)) {
		console.log(data)

		return (
			<>
				{Object.values(data).map(card => (
					<Card key={card.id} />
				))}
			</>
		)
	}
}

export default CardsScreen
