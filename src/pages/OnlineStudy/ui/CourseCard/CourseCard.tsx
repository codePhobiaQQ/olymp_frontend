import cn from 'classnames';
import cls from './CourseCard.module.scss';
import { HStack, VStack } from '@shared/ui/Stack';
import Title from '@shared/ui/Title/Title.tsx';
import { ReactComponent as ClockSvg } from '@shared/assets/svg/clock.svg';
import Text from '@shared/ui/Text/Text.tsx';
import AppLink from '@shared/ui/links/AppLink/AppLink.tsx';
// import CardBg from '@shared/assets/images/decore/cardBg.jpg'
// import AppImage from '@shared/ui/AppImage/AppImage.tsx';

type bgThemeType = 'blue' | 'light'
const bgThemeClsMapper: Record<bgThemeType, string> = {
  'blue': cls.bgBlueTheme,
  'light': cls.bgLightTheme
};

export type CourseCardProps = {
  link: string
  className?: string;
  title: string
  description?: string
  time: number
  bgTheme?: bgThemeType
  isCertificateOnFinish?: boolean
};

export const CourseCard = (props: CourseCardProps) => {
  const { className = '', link, description, time, title, bgTheme = 'blue', isCertificateOnFinish = false } = props;

  return (
    <AppLink className={cn(className, cls.CourseCard, bgThemeClsMapper[bgTheme])} theme='default' to={link} >
      {/*<AppImage wrapperClassName={cn(cls.DecorBgImage)} src={CardBg} />*/}

      <VStack className={cn(cls.ContentWrapper)} max gap='16' >
        <Title className={cn(cls.TitleCls)} isUpperCase={false} isUnderline={false} tag='h4' fontSize='28' fontFamily='mm' text={title}
                />

        <HStack className={cn(cls.DescriptionWrapper)}>
          {description && <Text text={description} className={cn(cls.DescriptionText)} fontSize='20' fontFamily='mth' />}
        </HStack>

        <HStack max justify='between'>
          {time && <HStack gap='14' align='center'>
            <ClockSvg className={cn(cls.ClockSvg)} />
            <Text fontSize='20' fontFamily='mr' color='grey' text={`${time} часов`} />
          </HStack>}
          {isCertificateOnFinish && <Text color='grey' fontFamily='mr' text='Сертификат по окончании' />}
        </HStack>
      </VStack>
    </AppLink>
  );
};