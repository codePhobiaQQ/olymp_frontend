import cn from 'classnames'
import { sectionType } from './../model/types/FullPageTypes'

interface FullPageSectionWrapperI {
	className?: string
	section: sectionType
	fullpageApi: any
}

const FullPageSectionWrapper = (props: FullPageSectionWrapperI) => {
	const { className = '', section, fullpageApi } = props

	console.log('fullpageApi', fullpageApi)

	return (
		<div className={cn('section', className)}>
			<p>Section 1 (welcome to fullpage.js)</p>
			<button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
			{section.component}
		</div>
	)
}

export default FullPageSectionWrapper
