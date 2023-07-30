import cn from 'classnames'
import cls from './FullPageSectionWrapper.module.scss'
import { sectionType } from '../../model/types/fullPage'
import { Item } from '@fullpage/react-fullpage'
import { useState } from 'react'

interface FullPageSectionWrapperI {
	className?: string
	section: sectionType
}

const FullPageSectionWrapper = (props: FullPageSectionWrapperI) => {
	const { className = '', section } = props
	const [activeSection, setActiveSection] = useState<Item>()

	return (
		<div
			style={{ backgroundColor: section?.backgroundColor }}
			className={cn('section', cls.FullPageSection, className)}
		>
			<p>Section 1 (welcome to fullpage.js)</p>
			{/* <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button> */}
			{section.component}
		</div>
	)
}

export default FullPageSectionWrapper
