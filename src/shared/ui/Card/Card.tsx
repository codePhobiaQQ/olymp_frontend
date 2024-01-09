import { RouteActionScreenAttributes } from '@shared/routes/routes'
import { useNavigate } from 'react-router-dom'
import AppLink from '@shared/ui/AppLink/AppLink'
import Title from '@shared/ui/Title/Title'
import cls from './Card.module.scss'
import cn from 'classnames'
import AppImage from '../AppImage/AppImage'
import Text from '@shared/ui/Text/Text'
import { ReactComponent as ArrowSvg } from '@shared/assets/images/svg/arrow.svg'
import { CardItem } from '@pages/MainPage/ui/MainScreen/model/data/data.ts'

export type CardSizeTheme = 'S' | 'M' | 'X'
const cardSizeThemeClsMapper: Record<CardSizeTheme, string> = {
  'S': cls.S,
  'M': cls.M,
  'X': cls.X,
}

interface CardI {
  className?: string
  data: CardItem
  sizeTheme?: CardSizeTheme
}

export const MainScreenCard = (props: CardI) => {
  const { className = '', data, sizeTheme = 'M' } = props

  return (
    <div className={cn(className, cls.MainScreenCard, cls.Card, cardSizeThemeClsMapper[sizeTheme])}>
      <Title tag='h4' className={cn(cls.CardTitle, 'ttu')} text={data?.title} />

      <ul className={cn(cls.CardList)}>
        {data?.links?.map((link, index) => (
          <li key={index + 'link' + link.path}>
            <AppLink color='grey' textProps={{ text: link.text }}  to={link.path} />
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
  const { className = '', data, sizeTheme = 'M' } = props

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
          <Title tag='h4' className={cn(cls.CardTitle, 'ttu')} text={data?.title} />
          <div className={cn(cls.DescriptionWrapper)}>
            <Text fontSize='26' className={cn(cls.Description)} text={data?.description} />

            <div className={cn(cls.ArrowWrapper)}>
              <ArrowSvg className={cn(cls.Arrow)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
