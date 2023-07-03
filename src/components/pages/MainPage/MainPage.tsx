import MainScreen from '../../screens/MainScreen/MainScreen'
import cn from 'classnames'

interface MainPageI {
	className?: string
}

const MainPage = ({ className = '' }: MainPageI) => {
	return (
		<div className={cn(className)}>
			<MainScreen />
		</div>
	)
}

export default MainPage
