import {NavLink, NavLinkProps} from 'react-router-dom'
import cls from './AppLink.module.scss'
import cn from 'classnames'
import ArrowSvg from '../../assets/svg/ArrowSvg'
import {ReactNode} from "react";
import Text from '@shared/ui/Text/Text.tsx';
import { colorClsMapper, colorType } from '@shared/lib/hooks/componentsSettings';

export enum AppLinkTheme {
  DEFAULT_LINK = 'default_link',
  LINK_WITH_ARROW = 'link_with_arrow',
}

type linkType = 'default' | 'link_with_arrow'

interface AppLinkI extends NavLinkProps {
  theme?: linkType
  className?: string
  text?: string
  children?: ReactNode
  color?: colorType
}

const AppLink = (props: AppLinkI) => {
  const {
    className = '',
    color = 'default',
    to,
    children,
    theme = 'link_with_arrow',
    text,
    ...otherProps
  } = props

  let content
  if (text) {
    content = text
  } else if (children) {
    content = children
  }

  if (theme == 'default') {
    return (
      <NavLink to={to} className={cn(className, cls.AppLink, colorClsMapper[color], cls[theme])} {...otherProps}>
        {content}
      </NavLink>
    )
  }

  if (theme == 'link_with_arrow' && text)
    return (
      <NavLink to={to} className={cn(className, cls.AppLink, colorClsMapper[color], cls[theme])} {...otherProps}>
        <Text style={{borderBottom: '2px solid rgba(255, 255, 255, 0.3)'}} text={text}/>
        <ArrowSvg className={cn('h_15', 'w_15')}/>
      </NavLink>
    )
}

export default AppLink
