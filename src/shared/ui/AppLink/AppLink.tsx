import { NavLink, NavLinkProps } from 'react-router-dom'
import styles from './AppLink.module.css'
import cn from 'classnames'
import ArrowSvg from '../../assets/svg/ArrowSvg'
import Text from '../Text/Text'

export enum AppLinkTheme {
  DEFAULT_LINK = 'default_link',
  LINK_WITH_ARROW = 'link_with_arrow',
  LINK_WITH_ARROW_XXL = 'link_with_arrow_xxl',
}

interface AppLinkI extends NavLinkProps {
  theme?: AppLinkTheme
  className?: string
  text?: string
  children?: React.ReactNode
}

const AppLink = (props: AppLinkI) => {
  const { className = '', to, children, theme = AppLinkTheme.LINK_WITH_ARROW, text, ...otherProps } = props

  if (theme == AppLinkTheme.DEFAULT_LINK) {
    let content
    if (text) {
      content = <Text text={text} />
    } else if (children) {
      content = children
    }

    return (
      <NavLink to={to} className={cn(className, styles.AppLink, styles[theme])} {...otherProps}>
        {content}
      </NavLink>
    )
  }

  if (theme == AppLinkTheme.LINK_WITH_ARROW)
    return (
      <NavLink to={to} className={cn(className, styles.AppLink, styles[theme])} {...otherProps}>
        <Text style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.3)' }} text={text} />
        <ArrowSvg className={cn('h_15', 'w_15', 'fill_white')} />
      </NavLink>
    )

  if (theme == AppLinkTheme.LINK_WITH_ARROW_XXL)
    return (
      <NavLink to={to} className={cn(className, styles.AppLink, styles[theme])} {...otherProps}>
        <Text text={text} />
        <ArrowSvg className={cn('h_30', 'w_35', 'fill_white')} />
      </NavLink>
    )
}

export default AppLink
