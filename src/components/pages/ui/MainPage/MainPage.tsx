import { Header } from '@/components/shared/Header'
import { FullPage } from '@/components/hoc/FullPage'
import { MainScreen } from '@/components/screens/MainScreen'
import AboutScreen from '@/components/screens/AboutScreen/ui/AboutScreen'
import RoutingCardsScreen from '@/components/screens/RoutingCardsScreen/RoutingCardsScreen'
import OrganisatorsAndPartners from '@/components/screens/OrganisatorsAndPartners/OrganisatorsAndPartners'
import SubscribeScreen from '@/components/screens/SubscribeScreen/ui/SubscribeScreen/SubscribeScreen'
import PhraseScreen from '@/components/screens/PhraseScreen/PhraseScreen'
import Footer from '@/components/shared/Footer/Footer'

const MainPage = () => {
	return (
		<FullPage
			sections={[
				{
					component: <MainScreen />,
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
					component: <SubscribeScreen />,
					sectionId: 'SubscribeScreen',
					backgroundColor: '#FFF',
				},
				{
					component: (
						<>
							<PhraseScreen />
							<Footer />
						</>
					),
					sectionId: 'PhraseScreen',
					backgroundColor: '#FFF',
				},
			]}
		/>
	)
}

export default MainPage
