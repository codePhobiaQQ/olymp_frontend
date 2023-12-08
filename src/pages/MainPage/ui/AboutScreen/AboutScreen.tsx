import cn from 'classnames';
import cls from './AboutScreen.module.scss';
import { useSelector } from 'react-redux';
import { getAboutScreenDescription } from '@pages/MainPage/model/selectors/mainPageSelectors';
import { WpTextFormatter } from '@shared/ui/WpTextFormatter/WpTextFormatter';
import { HStack, VStack } from '@shared/ui/Stack';
import Text from '@shared/ui/Text/Text.tsx';
import { ReactComponent as ArrowSvg } from '@shared/assets/svg/decor/arrow.svg';
import { SectionWrapper } from '@shared/layouts/SectionWrapper/SectionWrapper.tsx';
import Title from '@shared/ui/Title/Title.tsx';
import AppLink from '@shared/ui/AppLink/AppLink.tsx';
import { SliderApp } from '@shared/ui/SliderApp/SliderApp.tsx';
import SliderImg from '@shared/assets/images/aboutSlider/1.jpg'

// import {useAnimationLibs} from "@shared/lib/components/AnimationProvider/AnimationProvider.tsx";

type AboutScreenProps = {
  className?: string
}

type LinkType = {
  text: string
  href: string
}

const links: LinkType[] = [
  {
    text: 'Льготы победителям',
    href: '/1'
  },
  {
    text: 'Этапы олимпиад',
    href: '/2'
  },
  {
    text: 'Расписание',
    href: '/3'
  },
  {
    text: 'Полезное',
    href: '/4'
  },
  {
    text: 'Организаторы',
    href: '/5'
  }
];

export const AboutScreen = (props: AboutScreenProps) => {
  const { className } = props;
  // const title = useSelector(getAboutScreenTitle);
  const description = useSelector(getAboutScreenDescription);

  return (
    <SectionWrapper
      size='middle'
      id='AboutScreen'
      className={cn(className, cls.AboutScreen)}
    >
      <VStack max gap='30'>
        <Title text='о нас' />

        <HStack max justify='end'>
          <Text fontFamily='msb' fontSize='36' text='© 2001-2023' />
        </HStack>

        <HStack max justify='between'>
          <VStack className={cn(cls.NavigationWrapper)} max>
            {links.map((link, index) =>
              <AppLink
                className={cn(cls.NavigationItem)}
                key={link.href}
                to={link.href}
              >
                <HStack
                  key={index}
                  justify='between'
                  align='center'
                >
                  <Text text={link.text} className={cn(cls.LinkContent)} fontSize='26' />
                  <ArrowSvg className={cn(cls.Arrow)} />
                </HStack>
              </AppLink>
            )}
          </VStack>

          <SliderApp className={cn(cls.SliderAbout)} slides={[
            SliderImg,
            SliderImg,
            SliderImg,
          ]} />
        </HStack>

        <HStack gap='32' max justify='between'>
          <WpTextFormatter className={cn(cls.AboutDescription)} content={description} />
        </HStack>
      </VStack>
    </SectionWrapper>
  );
};
