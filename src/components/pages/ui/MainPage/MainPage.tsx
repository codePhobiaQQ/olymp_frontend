import { TitleWithTextScreen } from '@components/screens/TitleWithTextScreen'
import PageHoc from '../../../hoc/PageHoc/PageHoc'
import { AdvantagesScreen } from '@components/screens/AdvantagesScreen'
import { MainScreen } from '@components/screens/MainScreen'
import { TitleTextData } from '../../model/data'
// import { CardsScreen, CardsScreenTheme } from '@components/screens/CardsScreen'
// import { routesActionScreen } from '@/core/routes'
import SubscribeScreen from '@components/screens/SubscribeScreen/ui/SubscribeScreen/SubscribeScreen'

const MainPage = () => {
	return (
		<PageHoc>
			<MainScreen />
			<TitleWithTextScreen title={TitleTextData.title} text={TitleTextData.text} author={TitleTextData.author} />
			<AdvantagesScreen />
			{/* {CardsScreen<CardsScreenTheme.LINK_CARDS>({
				theme: CardsScreenTheme.LINK_CARDS,
				data: routesActionScreen,
			})} */}
			<SubscribeScreen />
		</PageHoc>
	)
}

export default MainPage
