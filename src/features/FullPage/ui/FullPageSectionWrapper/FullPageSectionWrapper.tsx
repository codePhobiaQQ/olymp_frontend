import cn from 'classnames'
import cls from './FullPageSectionWrapper.module.scss'
import { sectionType } from '../../model/types/fullPage'

interface FullPageSectionWrapperI {
	className?: string
	section: sectionType
}

const FullPageSectionWrapper = (props: FullPageSectionWrapperI) => {
	const { className = '', section } = props

	return (
		<div
			id={section.sectionId}
			style={{ backgroundColor: section?.backgroundColor }}
			className={cn('section', cls.Section)}
		>
			{section.component}
		</div>
	)
}

export default FullPageSectionWrapper
