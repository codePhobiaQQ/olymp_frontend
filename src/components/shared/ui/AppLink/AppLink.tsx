import { NavLink, NavLinkProps } from 'react-router-dom'
import styles from './AppLink.module.css'
import cn from 'classnames'
import ArrowSvg from '../../../../assets/svg/ArrowSvg'
import Typography from '../Typography/Typography'

export enum AppLinkTheme {
	LINK_WITH_ARROW = 'link_with_arrow',
}

interface AppLinkI extends NavLinkProps {
	theme?: AppLinkTheme
	className?: string
	text?: string
}

const AppLink = (props: AppLinkI) => {
	const { className = '', to, theme = AppLinkTheme.LINK_WITH_ARROW, text, ...otherProps } = props

	if (theme)
		return (
			<NavLink to={to} className={cn(className, styles.AppLink, styles[theme])} {...otherProps}>
				<Typography style={{ borderBottom: '2px solid #fff' }} className='fz_18 ttu' text={text} />
				<ArrowSvg className={cn('h_15', 'w_15', 'fill_white')} />
			</NavLink>
		)
}

export default AppLink
