import { advantagesData } from '../../model/data'
import AdvantagesCard from '../AdvantagesCard/AdvantagesCard'
import styles from './AdvantagesScreen.module.css'
import cn from 'classnames'
import { HStack } from '@shared/ui/Stack';
import { SectionWrapper } from '@shared/layouts';

interface AdvantagesScreenI {
	className?: string
}

const AdvantagesScreen = ({ className = '' }: AdvantagesScreenI) => {
	return (
		<SectionWrapper className={cn(className, styles.AdvantagesScreen)}>
			<HStack max justify='between' className={cn(styles.AdvantagesWrapper)}>
				{advantagesData.map((advantageItem, index) => (
					<AdvantagesCard key={index + advantageItem.text} data={advantageItem} />
				))}
			</HStack>
		</SectionWrapper>
	)
}

export default AdvantagesScreen
