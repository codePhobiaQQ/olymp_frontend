import {NavLink, NavLinkProps} from 'react-router-dom'
import cls from './AppLink.module.scss'
import cn from 'classnames'
import {ReactNode} from "react";
import { colorClsMapper, colorType } from '@shared/lib/hooks/componentsSettings';
import Text, { TextI } from '@shared/ui/Text/Text.tsx';

interface AppLinkI extends NavLinkProps {
  className?: string
  children?: ReactNode
  color?: colorType
  textProps?: TextI
}

const AppLink = (props: AppLinkI) => {
  const {
    className = '',
    color = 'default',
    to,
    children,
    textProps,
    ...otherProps
  } = props

  let content
  if (textProps) {
    content = <Text {...textProps}  />
  } else if (children) {
    content = children
  }

    return (
      <NavLink to={to} className={cn(className, cls.AppLink, colorClsMapper[color])} {...otherProps}>
        {content}
      </NavLink>
    )
}

export default AppLink
