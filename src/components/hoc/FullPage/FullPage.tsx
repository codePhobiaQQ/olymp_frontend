// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import ReactFullpage from '@fullpage/react-fullpage'

interface FullPageProps {
	children: React.ReactNoe
}

export const FullPage = (props: FullPageProps) => {
	const { children } = props

	return (
		<ReactFullpage
			// licenseKey={'YOUR_KEY_HERE'}
			// scrollingSpeed={1000} /* Options here */
			render={({ state, fullpageApi }) => {
				return (
					<ReactFullpage.Wrapper>
						<div className='section'>
							<p>Section 1 (welcome to fullpage.js)</p>
							<button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
						</div>

						<div className='section'>
							<p>Section 2</p>
						</div>
					</ReactFullpage.Wrapper>
				)
			}}
		/>
	)
}
