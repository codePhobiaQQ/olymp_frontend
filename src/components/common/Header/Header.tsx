import styles from './Header.module.css'
// import Logo from '@assets/svg/Logo.svg'
import cn from 'classnames'
import TopNavigation from '../TopNavigation/TopNavigation'

interface HeaderI {
	className?: string
}

const Header = ({ className = '' }: HeaderI) => {
	return (
		<div className={cn(className, styles.Header)}>
			<div className={cn(styles.HeaderInnner)}>
				{/* <Logo /> */}
				123
				<TopNavigation />
			</div>
		</div>
	)
}

export default Header
