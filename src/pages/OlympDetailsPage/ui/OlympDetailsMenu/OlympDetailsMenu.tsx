import cn from 'classnames'
import cls from './OlympDetailsMenu.module.scss'
import { OlympDetailsMenuItems } from '@pages/OlympDetailsPage/model/types/olympsDetails.ts'
import { useCallback } from 'react'

type OlympDetailsMenuProps = {
  className?: string
}

export const OlympDetailsMenu = (props: OlympDetailsMenuProps) => {
  const { className = '' } = props

  const renderOlympDetailsMenuItems = useCallback(() => {
    return Object.values(OlympDetailsMenuItems).map((item) => {
      return (
        <div key={item} className={cn(cls.OlympDetailsMenuItem)}>
          {item}
        </div>
      )
    })
  }, [])

  return <div className={cn(className, cls.OlympDetailsMenu)}>{renderOlympDetailsMenuItems()}</div>
}
