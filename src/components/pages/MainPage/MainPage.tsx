import PageHoc from '../../hoc/PageHoc/PageHoc'
import AdvantagesScreen from '../../screens/AdvantagesScreen/AdvantagesScreen'
import MainScreen from '../../screens/MainScreen/MainScreen'

const MainPage = () => {
	return (
		<PageHoc>
			<MainScreen />
			<AdvantagesScreen />
		</PageHoc>
	)
}

export default MainPage
