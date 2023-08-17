import ReactFullpage from '@fullpage/react-fullpage'
import FullPageSectionWrapper from '../FullPageSectionWrapper/FullPageSectionWrapper'
import { fullpageActions } from '../../model/slice/fullPageSlice'
import { sectionType } from '../../model/types/fullPage'
import { fullPageProps } from '../../model/vars/fullPageProps'
import { useDispatch } from 'react-redux'

interface FullPageProps {
  sections?: sectionType[]
}

export const FullPage = (props: FullPageProps) => {
  const dispatch = useDispatch()
  const { sections } = props

  return (
    // @ts-ignore
    <ReactFullpage
      {...fullPageProps}
      onLeave={(origin, destination, direction, trigger) => {
        dispatch(fullpageActions.setFullpageActiveSection(destination.item?.id))
      }}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            {sections?.map((section) => <FullPageSectionWrapper key={section.sectionId} section={section} />)}
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}
