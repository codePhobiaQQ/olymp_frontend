import cn from 'classnames'
import cls from './AboutScreen.module.scss'
import WaveImage from '@shared/assets/images/decore/wave.png'
import {useSelector} from 'react-redux'
import {getAboutScreenDescription, getAboutScreenTitle} from '@pages/MainPage/model/selectors/mainPageSelectors'
import {WpTextFormatter} from '@shared/ui/WpTextFormatter/WpTextFormatter'
import AppImage from '@shared/ui/AppImage/AppImage.tsx'
import {HStack, VStack} from '@shared/ui/Stack'
import {Title} from '@shared/ui/SectionTitle/Title.tsx'
// import {useAnimationLibs} from "@shared/lib/components/AnimationProvider/AnimationProvider.tsx";

type AboutScreenProps = {
    className?: string
}

export const AboutScreen = (props: AboutScreenProps) => {
    // const { Spring } = useAnimationLibs()

    // const [spring, api] = Spring.useSpring(() => ({
    //     from: {
    //         x: -100
    //     }
    // }))
    //
    // const handleClick = () => {
    //     api.start({
    //         from: {
    //             x: -100,
    //         },
    //         to: {
    //             x: 100,
    //         },
    //     })
    // }

    const {className} = props

    const title = useSelector(getAboutScreenTitle)
    const description = useSelector(getAboutScreenDescription)

    return (
        <section id="AboutScreen"
                          className={cn(className, cls.AboutScreen)}>
            <VStack gap="48">
                <HStack max justify="center">
                    <Title variant="h2">{title}</Title>
                </HStack>

                <HStack gap="32" max justify="between">
                    <WpTextFormatter className={cn(cls.AboutDescription)} content={description}/>
                    <WpTextFormatter className={cn(cls.AboutDescription)} content={description}/>
                </HStack>
            </VStack>

            <AppImage className={cn(cls.Wave)} src={WaveImage}/>
        </section>
    )
}
