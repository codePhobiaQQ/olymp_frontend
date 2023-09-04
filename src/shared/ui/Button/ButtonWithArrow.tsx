import LightArrowSvg from '../../assets/svg/LightArrowSvg'
import Text from '../Text/Text'
import Button from './Button'
import cls from './Button.module.scss'
import cn from 'classnames'

interface ButtonWithArrowI {
	className?: string
	text?: string
}

const ButtonWithArrow = ({ className = '', text = '' }: ButtonWithArrowI) => {
	return (
		<div className={cn(className, cls.ButtonWithArrow)}>
			<Button className={cls.BtnClassname}>
				<Text text={text} />
				<LightArrowSvg className={cls.BtnArrowSvg} />
			</Button>
		</div>
	)
}

export default ButtonWithArrow
