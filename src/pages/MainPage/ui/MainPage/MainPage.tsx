import {MainScreen} from './../MainScreen'
import {DynamicModuleLoader, ReducersList} from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {MainPageReducer} from './../../model/slice/mainPageSlice'
import { useLayoutEffect} from 'react'
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
import PhraseScreen from './../../ui/PhraseScreen/PhraseScreen.tsx'
import SubscribeScreen from './../../ui/SubscribeScreen/ui/SubscribeScreen/SubscribeScreen.tsx'
import {AnimationProvider, useAnimationLibs} from "@shared/lib/components/AnimationProvider/AnimationProvider.tsx";
import {VStack} from "@shared/ui/Stack";
import cn from "classnames";

const reducers: ReducersList = {
    mainPage: MainPageReducer,
}

const MainPageAsync = () => {
    const {isLoaded: isAnimationLoading} = useAnimationLibs()
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getIsLoading)
    const error = useSelector(getError)

    useLayoutEffect(() => {
        dispatch(fetchMainPageData())
    }, [])

    if (isLoading || !isAnimationLoading) {
        return <PageLoading/>
    }

    if (error) {
        return <VStack align='center' className={cn('p_50')}>
            <Text text={error}/>
        </VStack>
    }

    return (
        <AnimationProvider>
            <MainScreen/>
            <AboutScreen/>
            <PresentationScreen/>
            <BannerScreen/>
            <StagesScreen/>
            <TableScreen/>
            <RoutingCardsScreen/>
            <SubscribeScreen/>
            <PhraseScreen/>
        </AnimationProvider>
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