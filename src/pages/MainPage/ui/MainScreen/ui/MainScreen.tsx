import cn from 'classnames';
import cls from './MainScreen.module.scss';
import Title from '@shared/ui/Title/Title';
import MainScreenCard from '@shared/ui/Card/Card';
import { ReactComponent as LogoSvg } from '@shared/assets/images/svg/olymp-main.svg';
import { GradientBg } from '@shared/ui/GradientBg';
import { useGetMainScreenData } from '@pages/MainPage/ui/MainScreen/lib/hooks/useGetMainScreenData';
import { HStack, VStack } from '@shared/ui/Stack';
import Button from '@shared/ui/Button/Button.tsx';

interface MainScreenI {
  className?: string;
}

const MainScreen = ({ className = '' }: MainScreenI) => {
  const { subTitle, cardsData } = useGetMainScreenData();

  return (
    <VStack max justify='between' className={cn(className, cls.MainScreenWrapper)}>
        <VStack className={cn(cls.Content)}>
          <div className={cls.bg}>
            <GradientBg />
          </div>

          <VStack gap='40' align='center' className={cn(cls.TitleWrapper)}>
            <LogoSvg className={cn(cls.LogoTitle)} />
            <Title
              tag='h3'
              className={cn(cls.Title)}
              text={subTitle}
            />
          </VStack>
        </VStack>

      <HStack max className={cn(cls.MainScreenCardsWrapper)}>
        <HStack className={cn(cls.MainScreenCards)} max justify='between'>
          {cardsData.map((card, index) => (
            <MainScreenCard
              data={card}
              key={index + 'title' + card.title}
              className={cls.Card}
              sizeTheme='M'
            />
          ))}
        </HStack>
      </HStack>

      <Button colorTheme='light' variant='outline_transparent_arrow' className={cn(cls.OlympsBtn)}>олимпиады</Button>
    </VStack>
  );
};

export default MainScreen;
