import { TitleWithTextScreen } from '@components/screens/TitleWithTextScreen'
import PageHoc from '../../../hoc/PageHoc/PageHoc'
import { AdvantagesScreen } from '@components/screens/AdvantagesScreen'
import { MainScreen } from '@components/screens/MainScreen'
import { TitleTextData } from '../../model/data'
import { CardsScreen } from '@components/screens/CardsScreen'

const MainPage = () => {
	return (
		<PageHoc>
			<MainScreen />
			<TitleWithTextScreen title={TitleTextData.title} text={TitleTextData.text} author={TitleTextData.author} />
			<AdvantagesScreen />
			<CardsScreen />
		</PageHoc>
	)
}

export default MainPage
