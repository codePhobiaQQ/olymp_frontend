// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import ReactFullpage from '@fullpage/react-fullpage'
import FullPageSectionWrapper from '../FullPageSectionWrapper/FullPageSectionWrapper'
import { useAppDispatch } from '@/core/hooks/useAppDispatch/useAppDispatch'
import { fullpageActions } from '../../model/slice/fullPageSlice'

interface FullPageProps {
	sections?: sectionType[]
}

export const FullPage = (props: FullPageProps) => {
	const dispatch = useAppDispatch()
	const { sections } = props

	return (
		<ReactFullpage
			render={({ state, fullpageApi }) => {
				if (fullpageApi) {
					dispatch(fullpageActions.setFullpageApi(fullpageApi))
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
