import cn from 'classnames';
import cls from './AboutScreen.module.scss';
import { useSelector } from 'react-redux';
import { getAboutScreenDescription } from '@pages/MainPage/model/selectors/mainPageSelectors';
import { WpTextFormatter } from '@shared/ui/WpTextFormatter/WpTextFormatter';
import { HStack, VStack } from '@shared/ui/Stack';
import { SectionWrapper } from '@shared/layouts/SectionWrapper/SectionWrapper.tsx';
import { SliderApp } from '@shared/ui/SliderApp/SliderApp.tsx';
import SliderImg from '@shared/assets/images/aboutSlider/1.jpg';
import { SectionTitle } from '@shared/ui/titles';
import { ArrowLink } from '@shared/ui/links/ArrowLink/ArrowLink.tsx';

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
      <VStack max gap='60'>
        <SectionTitle text='о нас' />

        <HStack max justify='between'>
          <VStack className={cn(cls.NavigationWrapper)} max>
            {links.map((link) =>
              <ArrowLink key={link.href} className={cn(cls.NavigationItem)} linkProps={{ to: link.href }}
                         textProps={{ text: link.text, fontSize: '24', fontFamily: 'mm' }} />
            )}
          </VStack>

          <SliderApp className={cn(cls.SliderAbout)} slides={[
            SliderImg,
            SliderImg,
            SliderImg
          ]} />

        </HStack>

        <HStack gap='32' max justify='between'>
          <WpTextFormatter className={cn(cls.AboutDescription)} content={description} />
        </HStack>
      </VStack>
    </SectionWrapper>
  );
};
