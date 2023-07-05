import styles from './AdvantagesScreen.module.css'
import cn from 'classnames'

interface AdvantagesScreenI {
	className?: string
}

const AdvantagesScreen = ({ className = '' }: AdvantagesScreenI) => {
	return <div className={cn(className, styles.AdvantagesScreen)}>123 21312</div>
}

export default AdvantagesScreen
