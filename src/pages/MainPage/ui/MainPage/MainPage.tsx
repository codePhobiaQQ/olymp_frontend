import { MainScreen } from './../MainScreen'
import AboutScreen from './../AboutScreen/ui/AboutScreen'
import RoutingCardsScreen from './../RoutingCardsScreen/RoutingCardsScreen'
import OrganisatorsAndPartners from './../OrganisatorsAndPartners/OrganisatorsAndPartners'
import SubscribeScreen from './../SubscribeScreen/ui/SubscribeScreen/SubscribeScreen'
import PhraseScreen from './../PhraseScreen/PhraseScreen'
import Footer from '@widgets/Footer/Footer'
import { DynamicModuleLoader, ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { MainPageReducer } from '@pages/MainPage/model/slice/mainPageSlice'
import { useEffect } from 'react'
import { fetchMainPageData } from '@pages/MainPage/model/services/fetchMainPageData'
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getError, getIsLoading } from './../../model/selectors/mainPageSelectors'
import { PageLoading } from '@shared/ui/PageLoading/PageLoading'
import Text from '@shared/ui/Text/Text'

const reducers: ReducersList = {
  mainPage: MainPageReducer,
}

const MainPage = () => {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)

  useEffect(() => {
    dispatch(fetchMainPageData())
  }, [])

  if (isLoading) {
    return <PageLoading />
  }

  if (error) {
    return <Text text={error} />
  }

  return (
    <DynamicModuleLoader removeAfterUnmount={false} reducers={reducers}>
      <MainScreen />
      <AboutScreen />
      <RoutingCardsScreen />
      <OrganisatorsAndPartners />
      <SubscribeScreen />
      <PhraseScreen />
    </DynamicModuleLoader>
  )
}

export default MainPage
