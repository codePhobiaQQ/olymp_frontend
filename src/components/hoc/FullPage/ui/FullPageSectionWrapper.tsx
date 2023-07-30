import cn from 'classnames'

interface FullPageSectionWrapperI {
	className?: string
	children?: React.ReactNode
}

const FullPageSectionWrapper = (props: FullPageSectionWrapperI) => {
	const { className = '', children } = props

	return <div className={cn(className)}>{children}</div>
}

export default FullPageSectionWrapper
