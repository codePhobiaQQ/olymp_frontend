import styles from './TopNavigation.module.css'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

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
    path: '/news',
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
  return (
    <nav>
      <ul className={cn(className, styles.TopNavigation)}>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TopNavigation
