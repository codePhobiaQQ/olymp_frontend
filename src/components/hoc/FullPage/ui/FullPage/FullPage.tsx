import ReactFullpage from '@fullpage/react-fullpage'
import FullPageSectionWrapper from '../FullPageSectionWrapper/FullPageSectionWrapper'
import { useAppDispatch } from '@/core/hooks/useAppDispatch/useAppDispatch'
import { fullpageActions } from '../../model/slice/fullPageSlice'
import { sectionType } from '../../model/types/fullPage'
import { fullPageProps } from '../../model/vars/fullPageProps'

interface FullPageProps {
	sections?: sectionType[]
}

export const FullPage = (props: FullPageProps) => {
	const dispatch = useAppDispatch()
	const { sections } = props

	return (
		// @ts-ignore
		<ReactFullpage
			{...fullPageProps}
			// afterRender={()}
			// afterLoad={dispatch(fullpageActions.setFullpageApi(fullpageApi))}
			render={({ state, fullpageApi }) => {
				console.log(state)

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
