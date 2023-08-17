import { FullPage } from '@features/FullPage'
import { MainScreen } from '@widgets/MainScreen'
import AboutScreen from '@widgets/AboutScreen/ui/AboutScreen'
import RoutingCardsScreen from '@widgets/RoutingCardsScreen/RoutingCardsScreen'
import OrganisatorsAndPartners from '@widgets/OrganisatorsAndPartners/OrganisatorsAndPartners'
import SubscribeScreen from '@widgets/SubscribeScreen/ui/SubscribeScreen/SubscribeScreen'
import PhraseScreen from '@widgets/PhraseScreen/PhraseScreen'
import Footer from '@widgets/Footer/Footer'

export const MainPage = () => {
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
