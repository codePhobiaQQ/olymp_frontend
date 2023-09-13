import cls from './CardsLayout.module.scss'
import cn from 'classnames'
import { RouteActionScreenAttributes } from '@shared/routes/routes'
import {ReactNode} from "react";

type variantsType = 'full'

interface CardsLayoutI {
  className?: string
  routes?: RouteActionScreenAttributes[]
  children?: ReactNode
  variant?: variantsType
}

// const renderRoutesCards = (routes: RouteActionScreenAttributes[]) => {
//   return routes.map((route) => <CardRouting className={cn(cls.CardCls)} data={route} key={route.path} />)
// }

const variantClassMapper: Record<variantsType, string> = {
  'full': cls.Full
}

const CardsLayout = (props: CardsLayoutI) => {
  const { className = '', children, variant = 'full' } = props

  return (
    <div className={cn(className, cls.CardLayout, variantClassMapper[variant])}>
      {/*<div className={cls.CardsWrapperInner}>{renderRoutesCards(routes)}</div>*/}
      {children}
    </div>
  )
}

export default CardsLayout
