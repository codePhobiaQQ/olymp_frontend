import cls from './SubscribeInputField.module.css'
import { Dispatch, SetStateAction } from 'react'
import cn from 'classnames'
import Input from '@/components/shared/ui/Input/Input'
import Button, { ButtonTheme } from '@/components/shared/ui/Button/Button'
import Typography from '@/components/shared/ui/Typography/Typography'

interface SubscribeInputFieldI {
	className?: string
	value: string
	onChange: (e: HTMLInputElement) => void
}

const SubscribeInputField = ({ className = '', value, onChange }: SubscribeInputFieldI) => {
	return (
		<div className={cn(className, cls.SubscribeInputField)}>
			<Input className={cn(cls.Input)} placeholder='Ваш E-mail' />
			<Button wrapperClassName={cn(cls.Btn)} theme={ButtonTheme.SUBSCRIBE_THEME}>
				<Typography text='ПОДПИСАТЬСЯ' />
			</Button>
		</div>
	)
}

export default SubscribeInputField
