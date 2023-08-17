import Title, { TitleTheme } from '@/components/shared/ui/Titles/Title'
import cls from './TitleWithText.module.css'
import cn from 'classnames'
import Typography from '@/components/shared/ui/Typography/Typography'
import Button from '@/components/shared/ui/Button/Button'

interface TitleWithTextI {
	className?: string
	title?: string
	text?: React.ReactNode | string
	button?: React.ReactNode
	author?: string
	// Classes
	titleClassname?: string
	authorClassname?: string
	textClassname?: string
}

const TitleWithText = (props: TitleWithTextI) => {
	const { className = '', title, text, author, titleClassname, authorClassname, textClassname, button } = props

	let textContent
	if (typeof text == 'string') {
		textContent = <Typography className={cn(textClassname)} text={text} />
	} else {
		textContent = text
	}

	return (
		<div className={cn(className)}>
			<div className={cn(cls.TitleWithTextWrapperInner)}>
				<div className={cls.TitleWrapper}>
					<Title className={cn(cls.Title, titleClassname)} theme={TitleTheme.H3} text={title} />
					{author && <Typography text={author} className={cn(cls['AuthorWrapper'], authorClassname)} />}
				</div>

				<div className={cn(cls.TextWrapper)}>
					{textContent}
					{button && button}
				</div>
			</div>
		</div>
	)
}

export default TitleWithText
