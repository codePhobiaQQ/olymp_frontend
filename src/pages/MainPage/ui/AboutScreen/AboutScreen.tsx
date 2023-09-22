import cn from 'classnames';
import cls from './AboutScreen.module.scss';
import WaveImage from '@shared/assets/images/decore/wave.png';
import { useSelector } from 'react-redux';
import { getAboutScreenDescription, getAboutScreenTitle } from '@pages/MainPage/model/selectors/mainPageSelectors';
import { WpTextFormatter } from '@shared/ui/WpTextFormatter/WpTextFormatter';
import AppImage from '@shared/ui/AppImage/AppImage.tsx';
import { HStack, VStack } from '@shared/ui/Stack';
import { Title } from '@shared/ui/SectionTitle/Title.tsx';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
// import {useAnimationLibs} from "@shared/lib/components/AnimationProvider/AnimationProvider.tsx";

type AboutScreenProps = {
  className?: string
}

export const AboutScreen = (props: AboutScreenProps) => {
  const { className } = props;
  const title = useSelector(getAboutScreenTitle);
  const description = useSelector(getAboutScreenDescription);

  const ref = useRef(null);

  useEffect(() => {
    let context = gsap.context(() => {
      gsap.to(ref, { x: 100 });
    });
    return () => context.revert();
  }, []);

  return (
    <section ref={ref} id='AboutScreen'
             className={cn(className, cls.AboutScreen)}>
      <VStack gap='48'>
        <HStack max justify='center'>
          <Title variant='h2'>{title}</Title>
        </HStack>

        <HStack gap='32' max justify='between'>
          <WpTextFormatter className={cn(cls.AboutDescription)} content={description} />
          <WpTextFormatter className={cn(cls.AboutDescription)} content={description} />
        </HStack>
      </VStack>

      <AppImage className={cn(cls.Wave)} src={WaveImage} />
    </section>
  );
};
