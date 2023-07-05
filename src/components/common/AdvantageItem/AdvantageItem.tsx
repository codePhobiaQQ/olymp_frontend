import styles from './AdvantageItem.module.css'
import cn from 'classnames'

interface AdvantageItemI {
	className?: string
}

const AdvantageItem = ({ className = '' }: AdvantageItemI) => {
	return <div className={cn(className, styles.AdvantageItem)}>advantage item</div>
}

export default AdvantageItem
