import cn from 'classnames'
import cls from './OlympDetailsMenu.module.scss'
import { OlympDetailsMenuItems } from '@pages/OlympDetailsPage/model/types/olympsDetails.ts'
import { useCallback } from 'react'
import { OlympDetailsPageActions } from './../../model/slice/olympDetailsPageSlice.ts'
import { useDispatch, useSelector } from 'react-redux'
import { getActiveMenuItem } from '@pages/OlympDetailsPage/model/selectors/olympDetailsSelectors.ts'

type OlympDetailsMenuProps = {
  className?: string
}

export const OlympDetailsMenu = (props: OlympDetailsMenuProps) => {
  const { className = '' } = props
  const { setActiveMenuItem } = OlympDetailsPageActions
  const dispatch = useDispatch()

  const activeMenuItem = useSelector(getActiveMenuItem)

  const clickHandler = useCallback(
    (menuItem: OlympDetailsMenuItems) => {
      return () => dispatch(setActiveMenuItem(menuItem))
    },
    [dispatch, setActiveMenuItem]
  )

  const renderOlympDetailsMenuItems = useCallback(() => {
    return Object.values(OlympDetailsMenuItems).map((item) => {
      const isActive = activeMenuItem === item

      return (
        <div
          onClick={clickHandler(item)}
          key={item}
          className={cn(cls.OlympDetailsMenuItem, { [cls.Active]: isActive })}
        >
          {item}
        </div>
      )
    })
  }, [activeMenuItem, clickHandler])

  return <div className={cn(className, cls.OlympDetailsMenu)}>{renderOlympDetailsMenuItems()}</div>
}
