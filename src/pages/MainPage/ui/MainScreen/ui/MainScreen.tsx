import cn from 'classnames'
import cls from './MainScreen.module.scss'
import Title, { TitleTheme } from '@shared/ui/Title/Title'
import MainScreenCard, { CardSizeTheme } from '@shared/ui/Card/Card'
import { ReactComponent as LogoSvg } from '@shared/assets/images/svg/olymp-main.svg'
import { GradientBg } from '@shared/ui/GradientBg'
import { useGetMainScreenData } from '@pages/MainPage/ui/MainScreen/lib/hooks/useGetMainScreenData'
import {HStack, VStack} from "@shared/ui/Stack";

interface MainScreenI {
  className?: string
}

const MainScreen = ({ className = '' }: MainScreenI) => {
  const { subTitle, cardsData } = useGetMainScreenData()

  return (
    <section className={cn(className, cls.MainScreen)}>
      <div className={cls.bg}>
        <GradientBg />
      </div>

      <VStack gap='60' className={cn(cls.Content)}>
        <VStack gap='40' align='center' className={cn(cls.TitleWrapper)}>
          <LogoSvg className={cn(cls.LogoTitle)} />

            <Title
              style={{ color: '#fff' }}
              theme={TitleTheme.H3}
              className={cn(cls.Title)}
              text={subTitle}
            />
        </VStack>

        <HStack max justify='between'>
          {cardsData.map((card, index) => (
            <MainScreenCard
              data={card}
              key={index + 'title' + card.title}
              className={cls.Card}
              sizeTheme={CardSizeTheme.M}
            />
          ))}
        </HStack>
      </VStack>
    </section>
  )
}

export default MainScreen
