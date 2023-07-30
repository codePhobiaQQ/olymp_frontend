import { NavLink, NavLinkProps } from 'react-router-dom'
import styles from './AppLink.module.css'
import cn from 'classnames'
import ArrowSvg from '../../assets/svg/ArrowSvg'
import Typography from '../Typography/Typography'

export enum AppLinkTheme {
	LINK_WITH_ARROW = 'link_with_arrow',
	LINK_WITH_ARROW_XXL = 'link_with_arrow_xxl',
}

interface AppLinkI extends NavLinkProps {
	theme?: AppLinkTheme
	className?: string
	text?: string
}

const AppLink = (props: AppLinkI) => {
	const { className = '', to, theme = AppLinkTheme.LINK_WITH_ARROW, text, ...otherProps } = props

	if (theme == AppLinkTheme.LINK_WITH_ARROW)
		return (
			<NavLink to={to} className={cn(className, styles.AppLink, styles[theme])} {...otherProps}>
				<Typography style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.3)' }} text={text} />
				<ArrowSvg className={cn('h_15', 'w_15', 'fill_white')} />
			</NavLink>
		)

	if (theme == AppLinkTheme.LINK_WITH_ARROW_XXL)
		return (
			<NavLink to={to} className={cn(className, styles.AppLink, styles[theme])} {...otherProps}>
				<Typography text={text} />
				<ArrowSvg className={cn('h_30', 'w_35', 'fill_white')} />
			</NavLink>
		)
}

export default AppLink
