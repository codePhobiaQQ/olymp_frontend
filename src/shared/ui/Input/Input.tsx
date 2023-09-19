import cls from './Input.module.css'
import cn from 'classnames'
import { ChangeEvent, InputHTMLAttributes } from 'react'

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'className' | 'placeholder'>

export interface InputI extends HtmlInputProps {
  value?: string | number
  onChange?: (value: string) => void
  className?: string
  placeholder?: string
}

const Input = (props: InputI) => {
  const { className = '', value, onChange, placeholder, ...otherProps } = props

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={cn(className, cls.Input)}>
      <input value={value} onChange={changeHandler} placeholder={placeholder} {...otherProps} />
    </div>
  )
}

export default Input
