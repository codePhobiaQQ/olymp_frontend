import cls from './SubscribeInputField.module.css'
import cn from 'classnames'
import Input from '@shared/ui/Input/Input'
import Button from '@shared/ui/Button/Button'

interface SubscribeInputFieldI {
  className?: string
  value: string
  onChange: (e: string) => void
}

const SubscribeInputField = ({ className = '', value, onChange }: SubscribeInputFieldI) => {
  return (
    <div className={cn(className, cls.SubscribeInputField)}>
      <Input onChange={onChange} value={value} className={cn(cls.Input)} placeholder="Ваш E-mail" />
      <Button variant={'default'} className={cn(cls.Btn)}>
        ПОДПИСАТЬСЯ
      </Button>
    </div>
  )
}

export default SubscribeInputField
