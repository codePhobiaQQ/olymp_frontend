import styles from './Header.module.css'
// import Logo from '@assets/svg/Logo.svg'
import cn from 'classnames'
import TopNavigation from '../TopNavigation/TopNavigation'
import LogoSvg from '../../shared/assets/svg/LogoSvg'
import Button, { ButtonBorderRadiusTheme, ButtonColorTheme } from '@components/shared/ui/Button/Button'

interface HeaderI {
	className?: string
}

const Header = ({ className = '' }: HeaderI) => {
	return (
		<div className={cn(className, styles.Header)}>
			<div className={cn(styles.HeaderInnner)}>
				<LogoSvg className={cn(styles.Logo)} />
				<TopNavigation />
				<Button borderRadius={ButtonBorderRadiusTheme.S} colorTheme={ButtonColorTheme.DARK}>
					Войти
				</Button>
			</div>
		</div>
	)
}

export default Header
