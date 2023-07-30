import cls from './FullPageSectionWrapper.module.scss'
import { useSelector } from 'react-redux'
import { sectionType } from '../../model/types/fullPage'
import { Item } from '@fullpage/react-fullpage'
import { useState } from 'react'
import { getFullPageApi } from '../../model/selectors/getFullpageApi/getFullpageApi'

interface FullPageSectionWrapperI {
	className?: string
	section: sectionType
}

const FullPageSectionWrapper = (props: FullPageSectionWrapperI) => {
	const { className = '', section } = props
	const [activeSection, setActiveSection] = useState<Item>()

	const fullpageApi = useSelector(getFullPageApi)
	// console.log('fullpageApi', fullpageApi)

	return (
		<div style={{ backgroundColor: section?.backgroundColor }} className={'section'}>
			<p>Section 1 (welcome to fullpage.js)</p>
			<button onClick={() => fullpageApi?.moveSectionDown()}>Click me to move down</button>
			{/* {section.component} */}
		</div>
	)
}

export default FullPageSectionWrapper
