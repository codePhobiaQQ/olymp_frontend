import * as React from 'react'
import cls from './Header.module.scss'
import { Container } from '@shared/hoc/Container/Container'
import LogoSvg from '@assets/svg/logo/logo.svg?react'
import SearchSvg from '@assets/svg/search.svg?react'
import CalendarSvg from '@assets/svg/calendar.svg?react'
import cn from 'classnames'
import { Auth } from '@components/features/auth/login'

type Props = {};

export const Header = (props: Props) => {
  return (
    <>
      <HeaderDecore />

      <Container>
        <div className='flex justify-between pt-8 pb-8'>
          <LogoSvg />

          <div className='flex items-center gap-x-4'>
            <div className='flex items-center justify-center w-9 h-9 rounded-full bg-white pointer'>
              <CalendarSvg className='fill-current' />
            </div>
            <div className='flex items-center justify-center w-9 h-9 rounded-full bg-white pointer'>
              <SearchSvg className='stroke-current' />
            </div>

            <Auth />
          </div>
        </div>
      </Container>
    </>
  )
}

const HeaderDecore = () => {
  return <div className={cn(cls.HeaderDecore)}></div>
}