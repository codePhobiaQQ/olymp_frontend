import Header from '@/components/common/Header/Header'
import { FullPage } from '@/components/hoc/FullPage'
import { MainScreen } from '@/components/screens/MainScreen'
import AboutScreen from '@/components/screens/AboutScreen/ui/AboutScreen'
import RoutingCardsScreen from '@/components/screens/RoutingCardsScreen/RoutingCardsScreen'

const MainPage = () => {
	return (
		<FullPage
			sections={[
				{
					component: (
						<>
							<Header />
							<MainScreen />
						</>
					),
					sectionId: 'MainSection',
					backgroundColor: '#05131C',
				},
				{
					component: <AboutScreen />,
					sectionId: 'NewsSection',
					backgroundColor: '#fff',
				},
				{
					component: <RoutingCardsScreen />,
					sectionId: 'RoutingCardsScreen',
					backgroundColor: '#fff',
				},
			]}
		/>
	)
}

export default MainPage
