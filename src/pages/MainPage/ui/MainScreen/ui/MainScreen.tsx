import cn from 'classnames'
import cls from './MainScreen.module.scss'
import Title, { TitleTheme } from '@shared/ui/Title/Title'
import MainScreenCard, { CardSizeTheme } from '@shared/ui/Card/Card'
import { ReactComponent as LogoSvg } from '@shared/assets/images/svg/olymp-main.svg'
import Text from '@shared/ui/Text/Text'
import CircleArrowSvg from '@shared/assets/svg/CircleArrowSvg'
import { GradientBg } from '@shared/ui/GradientBg'
import { useGetMainScreenData } from '@pages/MainPage/ui/MainScreen/lib/hooks/useGetMainScreenData'
import { useCallback } from 'react'
import { scrollToSection } from '@shared/lib/functions/scrollToSection.ts'

interface MainScreenI {
  className?: string
}

const MainScreen = ({ className = '' }: MainScreenI) => {
  const { subTitle, cardsData } = useGetMainScreenData()

  const scrollSectionHandler = useCallback(() => {
    scrollToSection('AboutScreen')
  }, [])

  return (
    <section className={cn(className, cls.MainScreen)}>
      <div className={cls.bg}>
        <GradientBg />
      </div>

      <div className={cn(cls.Content)}>
        <div className={cn(cls.TitleWrapper)}>
          <LogoSvg className={cn(cls.LogoTitle)} />

          <div className={cn('m_t_30')}>
            <Title
              style={{ color: '#fff' }}
              theme={TitleTheme.H1_UPPERCASE}
              className={cn(cls.Title, 'm_auto')}
              text={subTitle}
            />
          </div>
        </div>

        <div className={cn(cls.CardsWrapper)}>
          {cardsData.map((card, index) => (
            <MainScreenCard
              data={card}
              key={index + 'title' + card.title}
              className={cls.Card}
              sizeTheme={CardSizeTheme.M}
            />
          ))}
        </div>

        <div onClick={scrollSectionHandler} className={cn(cls.MoreBtn)}>
          <Text text="Узнать больше" />
          <CircleArrowSvg className={cn(cls.MoreBtnIcon)} />
        </div>
      </div>
    </section>
  )
}

export default MainScreen
