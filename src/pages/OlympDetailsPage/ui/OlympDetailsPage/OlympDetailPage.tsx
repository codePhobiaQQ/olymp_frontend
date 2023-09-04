import cls from './OlympDetailPage.module.scss'
import cn from 'classnames'
import { TitleScreen } from '../TitleScreen/TitleScreen.tsx'
import { OlympDetailsMenu } from '@pages/OlympDetailsPage/ui/OlympDetailsMenu/OlympDetailsMenu.tsx'
import { OlympDetailsContent } from '@pages/OlympDetailsPage/ui/OlympDetailsContent/OlympDetailsContent.tsx'

export const OlympDetailPage = () => {
  return (
    <div className={cn(cls.OlympDetailPage)}>
      <TitleScreen />

      <div className={cn(cls.OlympDetailPageContent)}>
        <OlympDetailsMenu />
        <OlympDetailsContent />
      </div>
    </div>
  )
}
