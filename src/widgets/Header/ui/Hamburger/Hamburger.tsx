import cn from 'classnames'
import cls from './Hamburger.module.scss'
import HamburgerSvg from '@shared/assets/svg/hamburger.svg'
import { appSliceActions } from '@app/providers/store/model/slices/appSlice/appSlice'
import { useDispatch } from 'react-redux'

type HamburgerProps = {
  className?: string
}

export const Hamburger = (props: HamburgerProps) => {
  const { className } = props
  const dispatch = useDispatch()

  const openMenuHandler = () => {
    dispatch(appSliceActions.changeIsMenuOpen(true))
  }

  return <HamburgerSvg onClick={openMenuHandler} className={cn(className, cls.Hamburger)} />
}
