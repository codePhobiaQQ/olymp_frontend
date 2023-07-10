import Title, { TitleTheme } from '@components/shared/ui/Titles/Title'
import cls from './TitleWithTextScreen.module.css'
import cn from 'classnames'
import Typography from '@components/shared/ui/Typography/Typography'

interface TitleWithTextScreenI {
	className?: string
	title?: string
	text?: React.ReactNode | string
	author?: string
}

const TitleWithTextScreen = (props: TitleWithTextScreenI) => {
	const { className = '', title, text, author } = props

	let textContent
	if (typeof text == 'string') {
		textContent = <Typography text={text} />
	} else {
		textContent = text
	}

	return (
		<div className={cn(className, cls.TitleWithTextScreen)}>
			<div className={cls.TitleWrapper}>
				<Title theme={TitleTheme.TITLE_WITH_TEXT} text={title} />
			</div>
			<div className={cls.TextWrapper}>
				{textContent}
				{author && <Typography text={author} className={cls['AuthorWrapper']} />}
			</div>
		</div>
	)
}

export default TitleWithTextScreen
