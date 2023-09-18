import {MainScreen} from './../MainScreen'
import {DynamicModuleLoader, ReducersList} from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {MainPageReducer} from './../../model/slice/mainPageSlice'
import {ReactNode, useLayoutEffect} from 'react'
import {fetchMainPageData} from './../../model/services/fetchMainPageData'
import {useAppDispatch} from '@shared/lib/hooks/useAppDispatch/useAppDispatch'
import {useSelector} from 'react-redux'
import {getError, getIsLoading} from './../../model/selectors/mainPageSelectors'
import {PageLoading} from '@shared/ui/PageLoading/PageLoading'
import {AboutScreen} from './../AboutScreen/AboutScreen'
import Text from '@shared/ui/Text/Text'
import {PresentationScreen} from './../PresentationScreen/PresentationScreen'
import {BannerScreen} from './../BannerScreen/BannerScreen'
import {StagesScreen} from './../StagesScreen/StagesScreen'
import {TableScreen} from './../TableScreen/TableScreen'
import RoutingCardsScreen from './../RoutingCardsScreen/RoutingCardsScreen'
import OrganisatorsAndPartnersScreen from './../OrganisatorsAndPartnersScreen/OrganisatorsAndPartnersScreen.tsx'
import PhraseScreen from './../../ui/PhraseScreen/PhraseScreen.tsx'
import SubscribeScreen from './../../ui/SubscribeScreen/ui/SubscribeScreen/SubscribeScreen.tsx'
import {BenefitsScreen} from './../../ui/BenifitsScreen/BenefitsScreen.tsx'
import {AnimationProvider, useAnimationLibs} from "@shared/lib/components/AnimationProvider/AnimationProvider.tsx";

const reducers: ReducersList = {
    mainPage: MainPageReducer,
}

const MainPageAsync = () => {
    const {isLoaded: isAnimationLoading} = useAnimationLibs()
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getIsLoading)
    const error = useSelector(getError)

    console.log('animation loading', isAnimationLoading)

    useLayoutEffect(() => {
        dispatch(fetchMainPageData())
    }, [])

    if (isLoading || !isAnimationLoading) {
        return <PageLoading/>
    }

    if (error) {
        return <Text text={error}/>
    }

    return (
        <>
            <MainScreen/>
            <AboutScreen/>
            <PresentationScreen/>
            <BenefitsScreen/>
            <BannerScreen/>
            <StagesScreen/>
            <TableScreen/>
            <RoutingCardsScreen/>
            <OrganisatorsAndPartnersScreen/>
            <SubscribeScreen/>
            <PhraseScreen/>
        </>
    )
}

const MainPage = () => {
    return <DynamicModuleLoader removeAfterUnmount={false} reducers={reducers}>
        <AnimationProvider>
            <MainPageAsync />
        </AnimationProvider>
    </DynamicModuleLoader>
}

export default MainPage