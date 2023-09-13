import cls from './RoutingCardsScreen.module.css'
import cn from 'classnames'
import { routesActionScreen } from '@shared/routes/routes'
import { useMemo } from 'react'
import CardsLayout from "@shared/layouts/CardsLayout/CardsLayout";
import {CardRouting} from "@shared/ui/Card/Card.tsx";

interface RoutingCardsScreenI {
  className?: string
}

const RoutingCardsScreen = ({ className = '' }: RoutingCardsScreenI) => {
  const cardsData = useMemo(() => {
    return Object.values(routesActionScreen).splice(2, 4)
  }, [])

  return (
    <div className={cn(className, cls.RoutingCardsScreen)}>
      <CardsLayout>
        {cardsData.map(cardData => (
          <CardRouting
            key={cardData.path}
            data={{
            title: cardData.title,
            description: cardData.description,
            image: cardData.image
          }} />
        ))}
      </CardsLayout>
    </div>
  )
}

export default RoutingCardsScreen
