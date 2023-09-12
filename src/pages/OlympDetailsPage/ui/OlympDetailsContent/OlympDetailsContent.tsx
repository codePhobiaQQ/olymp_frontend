import cn from 'classnames'
import cls from './OlympDetailsContent.module.scss'
import { useSelector } from 'react-redux'
import { getActiveMenuItem } from './../../model/selectors/olympDetailsSelectors.ts'
import { OlympDetailsMenuItems } from '@pages/OlympDetailsPage/model/types/olympsDetails.ts'
import { OlympDetailsNewsContent } from '@pages/OlympDetailsPage/ui/tabs/OlympDetailsNewsContent/OlympDetailsNewsContent.tsx'
import { OffInfo } from '@pages/OlympDetailsPage/ui/tabs/OffInfo/OffInfo.tsx'
import { AboutOlymp } from '@pages/OlympDetailsPage/ui/tabs/AboutOlymp/AboutOlymp.tsx'

type OlympDetailsContentProps = {
  className?: string
}

export const OlympDetailsContent = (props: OlympDetailsContentProps) => {
  const { className = '' } = props
  const activeMenuItem = useSelector(getActiveMenuItem)

  let content
  if (activeMenuItem === OlympDetailsMenuItems.NEWS) {
    content = <OlympDetailsNewsContent className={className} />
  } else if (activeMenuItem === OlympDetailsMenuItems.OF_INFO) {
    content = <OffInfo className={className} />
  } else if (activeMenuItem === OlympDetailsMenuItems.TIME_PLACE) {
    content = 'TIME_PLACE'
  } else if (activeMenuItem === OlympDetailsMenuItems.ARCHIVE) {
    content = 'ARCHIVE'
  } else if (activeMenuItem === OlympDetailsMenuItems.PREV_TASKS) {
    content = 'PREV_TASKS'
  } else if (activeMenuItem === OlympDetailsMenuItems.PREPARE) {
    content = 'PREPARE'
  } else if (activeMenuItem === OlympDetailsMenuItems.RESULTS) {
    content = 'RESULTS'
  } else if (activeMenuItem === OlympDetailsMenuItems.PARTNERS) {
    content = 'PARTNERS'
  } else if (activeMenuItem === OlympDetailsMenuItems.ABOUT) {
    content = <AboutOlymp />
  }

  return <div className={cn(className, cls.OlympDetailsContent)}>{content}</div>
}
