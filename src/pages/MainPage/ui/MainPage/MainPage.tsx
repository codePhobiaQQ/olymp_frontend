import { MainScreen } from './../MainScreen'
import { DynamicModuleLoader, ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { MainPageReducer } from './../../model/slice/mainPageSlice'
import { useLayoutEffect } from 'react'
import { fetchMainPageData } from './../../model/services/fetchMainPageData'
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getError, getIsLoading } from './../../model/selectors/mainPageSelectors'
import { PageLoading } from '@shared/ui/PageLoading/PageLoading'
import { AboutScreen } from './../AboutScreen/AboutScreen'
import Text from '@shared/ui/Text/Text'
import { PresentationScreen } from './../PresentationScreen/PresentationScreen'
import { BannerScreen } from './../BannerScreen/BannerScreen'
import { StagesScreen } from './../StagesScreen/StagesScreen'
import { TableScreen } from './../TableScreen/TableScreen'
import RoutingCardsScreen from './../RoutingCardsScreen/RoutingCardsScreen'
import OrganisatorsAndPartnersScreen from './../OrganisatorsAndPartnersScreen/OrganisatorsAndPartnersScreen.tsx'

const reducers: ReducersList = {
  mainPage: MainPageReducer,
}

const MainPage = () => {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)

  useLayoutEffect(() => {
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
      <PresentationScreen />
      <BannerScreen />
      <StagesScreen />
      <TableScreen />
      <RoutingCardsScreen />
      <OrganisatorsAndPartnersScreen />
      {/*<SubscribeScreen />*/}
      {/*<PhraseScreen />*/}
    </DynamicModuleLoader>
  )
}

export default MainPage
