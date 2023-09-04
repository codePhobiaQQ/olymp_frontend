import cls from './SubscribeInputField.module.css'
import { Dispatch, SetStateAction } from 'react'
import cn from 'classnames'
import Input from '@shared/ui/Input/Input'
import Button from '@shared/ui/Button/Button'
import Text from '@shared/ui/Text/Text'

interface SubscribeInputFieldI {
  className?: string
  value: string
  onChange: (e: HTMLInputElement) => void
}

const SubscribeInputField = ({ className = '', value, onChange }: SubscribeInputFieldI) => {
  return (
    <div className={cn(className, cls.SubscribeInputField)}>
      <Input className={cn(cls.Input)} placeholder="Ваш E-mail" />
      <Button wrapperClassName={cn(cls.Btn)}>
        <Text text="ПОДПИСАТЬСЯ" />
      </Button>
    </div>
  )
}

export default SubscribeInputField
