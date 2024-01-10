import React from 'react'
import cn from 'classnames';
import cls from './MainScreen.module.scss';
import { Title } from '@shared/ui/titles'
import { MainScreenCard } from './../MainScreenCard/MainScreenCard';
import { ReactComponent as LogoSvg } from '@shared/assets/images/svg/olymp-main.svg';
import { GradientBg } from '@shared/ui/GradientBg';
import { useGetMainScreenData } from '@pages/MainPage/ui/MainScreen/lib/hooks/useGetMainScreenData.ts';
import { HStack, VStack } from '@shared/ui/Stack';

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
            <React.Fragment key={index + 'title' + card.title} >
              <MainScreenCard
                data={card}
                className={cls.Card}
              />

              {index + 1 !== cardsData.length && <VStack className={cn(cls.Separator)}>
                <div className={cn(cls.SeparatorTop, cls.SeparatorLine)}></div>
                <div className={cn(cls.SeparatorBottom, cls.SeparatorLine)}></div>
              </VStack>}
            </React.Fragment>
          ))}
        </HStack>
      </HStack>
    </VStack>
  );
};

export default MainScreen;
