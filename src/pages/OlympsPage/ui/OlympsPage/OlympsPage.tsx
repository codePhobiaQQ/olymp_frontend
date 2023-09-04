import cls from './OlympsPage.module.css'
import cn from 'classnames'
import { TitleScreen } from './../TitleScreen/TitleScreen.tsx'

export const OlympsPage = () => {
  return (
    <div className={cn(cls.OlympsPage)}>
      <TitleScreen />
    </div>
  )
}
