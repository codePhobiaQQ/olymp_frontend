import CardRoutesLayout from '@/components/shared/CardsLayout/CardsLayout'
import cls from './RoutingCardsScreen.module.css'
import cn from 'classnames'
import { routesActionScreen } from '@/core/routes/routes'
import { useMemo } from 'react'

interface RoutingCardsScreenI {
	className?: string
}

const RoutingCardsScreen = ({ className = '' }: RoutingCardsScreenI) => {
	const firstCards = useMemo(() => {
		return Object.values(routesActionScreen).splice(2, 2)
	}, [])
	const secodnCards = useMemo(() => {
		return Object.values(routesActionScreen).splice(4, 2)
	}, [])

	return (
		<div className={cn(className, cls.RoutingCardsScreen)}>
			<CardRoutesLayout routes={firstCards} className={cls.CardsWrapper} />
			<CardRoutesLayout routes={secodnCards} className={cls.CardsWrapper} />
		</div>
	)
}

export default RoutingCardsScreen
