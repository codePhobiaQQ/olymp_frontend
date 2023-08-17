/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RouteActionScreenAttributes } from '@/shared/routes/routes'
import { CardItem } from '../../screens/MainScreen/model/data'
import { useNavigate } from 'react-router-dom'
// import AppImage from '../ui/AppImage/AppImage'
import AppLink, { AppLinkTheme } from '../ui/AppLink/AppLink'
import Title, { TitleTheme } from '../ui/Titles/Title'
import cls from './Card.module.scss'
import cn from 'classnames'
import AppImage from '../AppImage/AppImage'
import Typography from '../ui/Typography/Typography'
import ArrowSvg from '../assets/svg/ArrowSvg'

export enum CardSizeTheme {
  S = 'S',
  M = 'M',
  X = 'X',
}

interface CardI {
  className?: string
  data: CardItem
  sizeTheme?: CardSizeTheme
}

const MainScreenCard = (props: CardI) => {
  const { className = '', data, sizeTheme = CardSizeTheme.M } = props

  return (
    <div className={cn(className, cls.MainScreenCard, cls.Card, cls[sizeTheme])}>
      <Title theme={TitleTheme.H4} className={cn(cls.CardTitle, 'ttu')} text={data?.title} />

      <ul className={cn(cls.CardList)}>
        {/* @ts-ignore */}
        {data?.links?.map((link, index) => (
          <li key={index + 'link' + link.path}>
            <AppLink text={link.text} to={link.path} theme={AppLinkTheme.LINK_WITH_ARROW} />
          </li>
        ))}
      </ul>
    </div>
  )
}

interface RoutingCardI {
  className?: string
  data: RouteActionScreenAttributes
  sizeTheme?: CardSizeTheme
}

export const CardRouting = (props: RoutingCardI) => {
  const navigate = useNavigate()
  const { className = '', data, sizeTheme = CardSizeTheme.M } = props

  const clickHandler = () => {
    navigate(data?.path || '/')
  }

  return (
    <div onClick={clickHandler} className={cn(className, cls.CardRouting, cls.Card, cls[sizeTheme])}>
      {data?.image && (
        <div className={cn(cls.bg)}>
          <AppImage src={data?.image} />
        </div>
      )}
      <div className={cn(cls.CardRoutingContentWrapper)}>
        <div className={cn(cls.CardRoutingContentWrapperInner)}>
          <Title theme={TitleTheme.H4} className={cn(cls.CardTitle, 'ttu')} text={data?.title} />
          <div className={cn(cls.DescriptionWrapper)}>
            <Typography className={cn(cls.Description)} text={data?.description} />

            <div className={cn(cls.ArrowWrapper)}>
              <ArrowSvg className={cn(cls.Arrow)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainScreenCard
