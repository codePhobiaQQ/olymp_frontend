import styles from './Header.module.css'
// import Logo from '@assets/svg/Logo.svg'
import cn from 'classnames'
import TopNavigation from '../TopNavigation/TopNavigation'
import HeaderButton from '../../shared/ui/HeaderButton/HeaderButton'

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
				<HeaderButton text={'Войти'} />
			</div>
		</div>
	)
}

export default Header
