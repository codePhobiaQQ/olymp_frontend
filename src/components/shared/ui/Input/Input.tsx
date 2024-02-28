import * as React from 'react'
import { Input as InputAntd, InputProps, Typography, TypographyProps, Flex } from 'antd'

interface Props extends InputProps {
  labelProps?: TypographyProps['Text']['propTypes']
}

export const Input = (props: Props) => {
  const { placeholder = 'Введите данные', labelProps, ...otherProps } = props

  // -------- Label -----------
  let label
  if (labelProps) {
    label = <Typography {...labelProps} />
  }

  // -------- Input -----------
  let input
  if (otherProps.type == 'password') {
    input = <InputAntd.Password placeholder={placeholder} {...otherProps} />
  } else {
    input = <InputAntd placeholder={placeholder} {...otherProps} />
  }

  return <Flex gap='small' vertical>
    {label}
    {input}
  </Flex>
}