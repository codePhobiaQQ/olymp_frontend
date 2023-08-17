import cls from './Input.module.css'
import cn from 'classnames'

interface InputI extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	className?: string
}

const Input = (props: InputI) => {
	const { className = '', value, onChange, placeholder, ...otherProps } = props

	return (
		<div className={cn(className, cls.Input)}>
			<input value={value} onChange={onChange} placeholder={placeholder} {...otherProps} />
		</div>
	)
}

export default Input
