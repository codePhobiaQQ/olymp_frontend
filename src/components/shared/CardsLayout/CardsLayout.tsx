import cls from './CardsLayout.module.css'
import cn from 'classnames'
import { RouteActionScreenAttributes, RoutesActionScreenType, routesActionScreen } from '@/shared/routes/routes'
import { CardRouting } from '@/components/shared/Card/Card'

interface CardLayoutI {
  className?: string
  routes?: RouteActionScreenAttributes[]
}

const renderRoutesCards = (routes: RouteActionScreenAttributes[]) => {
  return routes.map((route) => <CardRouting className={cn(cls.CardCls)} data={route} key={route.path} />)
}

const CardRoutesLayout = ({ className = '', routes = [] }: CardLayoutI) => {
  return (
    <div className={cn(className, cls.CardLayout)}>
      <div className={cls.CardsWrapperInner}>{renderRoutesCards(routes)}</div>
    </div>
  )
}

export default CardRoutesLayout
