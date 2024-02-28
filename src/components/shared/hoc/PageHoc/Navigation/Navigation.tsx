import * as React from 'react'
import cls from './Navigation.module.scss'
import { Link } from 'react-router-dom'
import { Container } from '@shared/hoc/Container/Container'
import cn from 'classnames'
import { renderNavigationLinks } from '@core/config/routes'

type Props = {};

export const Navigation = (props: Props) => {
  return (
    <nav className={cn('mt-10', cls.Navigation)}>
      <Container>
        <ul className='flex pt-4 pb-4 gap-12'>
          {renderNavigationLinks().map(link => {
            return <li key={link.to}>
              <Link className='text-xl' to={link.to}>
                {link.navLabel}
              </Link>
            </li>
          })}
        </ul>
      </Container>
    </nav>
  )
}