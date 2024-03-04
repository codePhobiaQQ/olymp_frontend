import * as React from 'react'
import cls from './Navigation.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { Container } from '@shared/hoc/Container/Container'
import cn from 'classnames'
import { renderNavigationLinks } from '@core/config/routes'

// https://codepen.io/havardob/pen/ExvwGBr

type Props = {};

export const Navigation = (props: Props) => {
  const location = useLocation()

  return (
    <nav className={cn('mt-10', cls.Navigation)}>
      <Container>
        <ul className='flex gap-12'>
          {renderNavigationLinks().map(link => {
            const isActive = location.pathname === link.to

            return (
              <li className={cn('pt-4 pb-4', { [cls.active]: isActive })} key={link.to}>
                <Link className='text-xl pt-4 pb-4' to={link.to}>
                  {link.navLabel}
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </nav>
  )
}