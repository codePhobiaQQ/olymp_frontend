import cn from 'classnames'
import cls from './MainScreen.module.scss'
import Title from '@shared/ui/Title/Title'
import MainScreenCard, { CardSizeTheme } from '@shared/ui/Card/Card'
import { ReactComponent as LogoSvg } from '@shared/assets/images/svg/olymp-main.svg'
import { GradientBg } from '@shared/ui/GradientBg'
import { useGetMainScreenData } from '@pages/MainPage/ui/MainScreen/lib/hooks/useGetMainScreenData'
import {HStack, VStack} from "@shared/ui/Stack";
import { SectionWrapper } from '@shared/layouts/SectionWrapper/SectionWrapper.tsx';
import Button from '@shared/ui/Button/Button.tsx';

interface MainScreenI {
  className?: string
}

const MainScreen = ({ className = '' }: MainScreenI) => {
  const { subTitle, cardsData } = useGetMainScreenData()

  return (
    <SectionWrapper className={cn(className, cls.MainScreen)}>
      <div className={cls.bg}>
        <GradientBg />
      </div>

      <VStack gap='60' className={cn(cls.Content)}>
        <VStack gap='40' align='center' className={cn(cls.TitleWrapper)}>
          <LogoSvg className={cn(cls.LogoTitle)} />

            <Title
              style={{ color: '#fff' }}
              tag='h3'
              className={cn(cls.Title)}
              text={subTitle}
            />
        </VStack>

        <HStack className={cn(cls.MainScreenCards)} max justify='between'>
          {cardsData.map((card, index) => (
            <MainScreenCard
              data={card}
              key={index + 'title' + card.title}
              className={cls.Card}
              sizeTheme={CardSizeTheme.M}
            />
          ))}
        </HStack>

        <Button colorTheme='light' variant='outline_transparent_arrow' className={cn(cls.OlympsBtn)}>олимпиады</Button>
      </VStack>
    </SectionWrapper>
  )
}

export default MainScreen
