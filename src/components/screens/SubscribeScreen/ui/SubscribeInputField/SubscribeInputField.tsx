import cls from './SubscribeInputField.module.css'
import { Dispatch, SetStateAction } from 'react'
import cn from 'classnames'

interface SubscribeInputFieldI {
	className?: string
	value: string
	onChange: Dispatch<SetStateAction<string>>
}

const SubscribeInputField = ({ className = '', value, onChange }: SubscribeInputFieldI) => {
	return <div className={cn(className, cls.SubscribeInputField)}></div>
}

export default SubscribeInputField
