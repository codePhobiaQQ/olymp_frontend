import PageHoc from '../../hoc/PageHoc/PageHoc'
import { AdvantagesScreen } from '../../screens/AdvantagesScreen'
import { MainScreen } from '../../screens/MainScreen'

const MainPage = () => {
	return (
		<PageHoc>
			<MainScreen />
			<AdvantagesScreen />
		</PageHoc>
	)
}

export default MainPage
