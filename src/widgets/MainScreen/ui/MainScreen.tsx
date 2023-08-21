import cn from 'classnames'
import cls from './MainScreen.module.scss'
import Title, { TitleTheme } from '@shared/ui/Title/Title'
import MainScreenCard, { CardSizeTheme } from '@shared/ui/Card/Card'
import { cardsList } from '../model/data'
import LogoSvg from '@shared/assets/svg/LogoSvg'
import Text from '@shared/ui/Text/Text'
import CircleArrowSvg from '@shared/assets/svg/CircleArrowSvg'
import { GradientBg } from '@shared/ui/GradientBg'

interface MainScreenI {
  className?: string
}

const MainScreen = ({ className = '' }: MainScreenI) => {
  return (
    <div className={cn(className, cls.MainScreen)}>
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
              text="Система поддержки проведения интеллектуальных соревнований школьников"
            />
          </div>

        </div>

        <div className={cn(cls.CardsWrapper)}>
          {cardsList.map((card, index) => (
            <MainScreenCard
              data={card}
              key={index + 'title' + card.title}
              className={cls.Card}
              sizeTheme={CardSizeTheme.M}
            />
          ))}
        </div>

        <div className={cn(cls.MoreBtn)}>
          <Text text="Узнать больше" />
          <CircleArrowSvg className={cn(cls.MoreBtnIcon)} />
        </div>
      </div>
    </div>
  )
}

export default MainScreen
