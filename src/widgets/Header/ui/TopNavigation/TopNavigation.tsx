import cls from './TopNavigation.module.scss'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions, getIsMenuOpen } from '@app/providers/storeProvider';
import { ReactComponent as CloseSvg } from '@shared/assets/svg/decor/cancel.svg';

interface TopNavigationI {
  className?: string
}

interface LinkType {
  text: string
  path: string
}

const links: LinkType[] = [
  {
    text: 'Главная',
    path: '/',
  },
  {
    text: 'Олимпиады',
    path: '/olymps',
  },
  {
    text: 'Новости',
    path: '/new',
  },
  {
    text: 'Онлайн обучение',
    path: '/online-study',
  },
  {
    text: 'Об олимпиадах',
    path: '/about-olymps',
  },
]

const TopNavigation = ({ className = '' }: TopNavigationI) => {
  const isMenuOpen = useSelector(getIsMenuOpen)

  const dispatch = useDispatch()
  const closeHandler = () => {
    dispatch(AppActions.setIsMenuOpen(false))
  }

  return (
    <nav className={cn(cls.TopNavigationWrapper, { [cls.Open]: isMenuOpen })}>
      <div className={cn(cls.TopNavigationWrapperInner)}>
        <CloseSvg onClick={closeHandler} className={cn(cls.MenuCloser)} />

        <ul className={cn(className, cls.TopNavigation)}>
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default TopNavigation
