import { advantagesData } from '../../model/data'
import AdvantagesCard from '../AdvantagesCard/AdvantagesCard'
import styles from './AdvantagesScreen.module.css'
import cn from 'classnames'

interface AdvantagesScreenI {
	className?: string
}

const AdvantagesScreen = ({ className = '' }: AdvantagesScreenI) => {
	return (
		<div className={cn(className, styles.AdvantagesScreen)}>
			<div className={cn(styles.AdvantagesWrapper)}>
				{advantagesData.map(advantageItem => (
					<AdvantagesCard data={advantageItem} />
				))}
			</div>
		</div>
	)
}

export default AdvantagesScreen
