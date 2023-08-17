import cls from './PageDescription.module.css'
import cn from 'classnames'

interface PageDescriptionI {
	className?: string
	leftSideDescription?: string
	rightSideDescription?: string
}

const PageDescription = (props: PageDescriptionI) => {
	const { leftSideDescription = '', rightSideDescription = '', className = '' } = props

	return (
		<div className={cn(className, cls.PageDescription)}>
			<div className={cn(cls.DescriptionSide, cls.LeftSide)}>{leftSideDescription}</div>
			<div className={cn(cls.DescriptionSide, cls.RightSide)}>{rightSideDescription}</div>
		</div>
	)
}

export default PageDescription
