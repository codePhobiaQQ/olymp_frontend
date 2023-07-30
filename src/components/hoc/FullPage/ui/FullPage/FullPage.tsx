// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import ReactFullpage from '@fullpage/react-fullpage'
import FullPageSectionWrapper from '../FullPageSectionWrapper/FullPageSectionWrapper'

interface FullPageProps {
	sections?: sectionType[]
}

export const FullPage = (props: FullPageProps) => {
	const { sections } = props

	return (
		<ReactFullpage
			afterLoad={function (origin, destination, direction, trigger) {
				//using index
				if (origin.index == 2) {
					alert('Section 3 ended loading')
				}

				//using anchorLink
				if (origin.anchor == 'secondSlide') {
					alert('Section 2 ended loading')
				}
			}}
			render={({ state, fullpageApi }) => {
				if (fullpageApi) {
					console.log('fullpageApi', fullpageApi)
				}

				return (
					<ReactFullpage.Wrapper>
						{sections?.map(section => (
							<FullPageSectionWrapper key={section.sectionId} section={section} />
						))}
					</ReactFullpage.Wrapper>
				)
			}}
		/>
	)
}
