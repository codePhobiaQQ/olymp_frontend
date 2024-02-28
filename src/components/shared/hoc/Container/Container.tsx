import * as React from 'react'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
};

export const Container = (props: Props) => {
  const { children } = props

  return (
    <div className='container-custom'>
      <div className='container-inner'>
        {children}
      </div>
    </div>
  )
}