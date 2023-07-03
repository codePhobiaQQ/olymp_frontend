import cn from 'classnames'
import styles from './MainScreen.module.css'

interface MainScreenI {
	className?: string
}

const MainScreen = ({ className = '' }: MainScreenI) => {
	return <div className={cn(className, styles.MainScreen)}>main screen</div>
}

export default MainScreen
