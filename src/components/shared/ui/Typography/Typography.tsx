import * as React from 'react'
import { Typography as TypographyAnd, TypographyProps } from 'antd'

interface Props extends TypographyProps {
}

export const Typography = (props: Props) => {
  const { ...otherProps } = props

  return (
    <TypographyAnd {...otherProps} />
  )
}