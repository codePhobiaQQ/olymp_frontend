import { MainScreen } from '@widgets/MainScreen'
import AboutScreen from '@widgets/AboutScreen/ui/AboutScreen'
import RoutingCardsScreen from '@widgets/RoutingCardsScreen/RoutingCardsScreen'
import OrganisatorsAndPartners from '@widgets/OrganisatorsAndPartners/OrganisatorsAndPartners'
import SubscribeScreen from '@widgets/SubscribeScreen/ui/SubscribeScreen/SubscribeScreen'
import PhraseScreen from '@widgets/PhraseScreen/PhraseScreen'
import Footer from '@widgets/Footer/Footer'

const MainPage = () => {
  return (
    <>
      <MainScreen/>
      <AboutScreen />
      <RoutingCardsScreen />
      <OrganisatorsAndPartners />
      <SubscribeScreen />
      <PhraseScreen />
      <Footer />
    </>
  )
}

export default MainPage
