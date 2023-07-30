// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import ReactFullpage from '@fullpage/react-fullpage'
import FullPageSectionWrapper from './FullPageSectionWrapper'

interface FullPageProps {
	sections?: sectionType[]
}

export const FullPage = (props: FullPageProps) => {
	const { sections } = props

	return (
		<ReactFullpage
			// licenseKey={'YOUR_KEY_HERE'}
			// scrollingSpeed={1000} /* Options here */
			render={({ state, fullpageApi }) => {
				return (
					<ReactFullpage.Wrapper>
						{sections?.map(section => (
							<FullPageSectionWrapper fullpageApi={fullpageApi} key={section.sectionId} section={section} />
						))}
					</ReactFullpage.Wrapper>
				)
			}}
		/>
	)
}
