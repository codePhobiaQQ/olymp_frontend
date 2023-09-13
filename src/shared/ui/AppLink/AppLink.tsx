import {NavLink, NavLinkProps} from 'react-router-dom'
import cls from './AppLink.module.scss'
import cn from 'classnames'
import ArrowSvg from '../../assets/svg/ArrowSvg'
import Text from '../Text/Text'
import {ReactNode} from "react";

export enum AppLinkTheme {
  DEFAULT_LINK = 'default_link',
  LINK_WITH_ARROW = 'link_with_arrow',
  LINK_WITH_ARROW_XXL = 'link_with_arrow_xxl',
}

type colorType = 'dark' | 'light'

interface AppLinkI extends NavLinkProps {
  theme?: AppLinkTheme
  className?: string
  text?: string
  children?: ReactNode
  color?: colorType
}

const colorClsMapper: Record<colorType, string> = {
  'dark': cls.dark,
  'light': cls.light
}

const AppLink = (props: AppLinkI) => {
  const {
    className = '',
    color = 'dark',
    to,
    children,
    theme = AppLinkTheme.LINK_WITH_ARROW,
    text,
    ...otherProps
  } = props

  if (theme == AppLinkTheme.DEFAULT_LINK) {
    let content
    if (text) {
      content = text
    } else if (children) {
      content = children
    }

    return (
      <NavLink to={to} className={cn(className, cls.AppLink, colorClsMapper[color], cls[theme])} {...otherProps}>
        {content}
      </NavLink>
    )
  }

  if (theme == AppLinkTheme.LINK_WITH_ARROW)
    return (
      <NavLink to={to} className={cn(className, cls.AppLink, colorClsMapper[color], cls[theme])} {...otherProps}>
        <Text style={{borderBottom: '2px solid rgba(255, 255, 255, 0.3)'}} text={text}/>
        <ArrowSvg className={cn('h_15', 'w_15')}/>
      </NavLink>
    )

  if (theme == AppLinkTheme.LINK_WITH_ARROW_XXL)
    return (
      <NavLink to={to} className={cn(className, cls.AppLink, colorClsMapper[color], cls[theme])} {...otherProps}>
        <Text text={text}/>
        <ArrowSvg className={cn('h_30', 'w_35')}/>
      </NavLink>
    )
}

export default AppLink
