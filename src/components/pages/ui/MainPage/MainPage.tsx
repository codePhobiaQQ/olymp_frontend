import Header from '@/components/common/Header/Header'
import { FullPage } from '@/components/hoc/FullPage'
import { MainScreen } from '@/components/screens/MainScreen'
import AboutScreen from '@/components/screens/AboutScreen/ui/AboutScreen'
import RoutingCardsScreen from '@/components/screens/RoutingCardsScreen/RoutingCardsScreen'
import OrganisatorsAndPartners from '@/components/screens/OrganisatorsAndPartners/OrganisatorsAndPartners'

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
				{
					component: <OrganisatorsAndPartners />,
					sectionId: 'OrganisatorsAndPartners',
					backgroundColor: '#EFEFEF',
				},
				{
					component: <OrganisatorsAndPartners />,
					sectionId: 'OrganisatorsAndPartners',
					backgroundColor: '#FFF',
				},
			]}
		/>
	)
}

export default MainPage
