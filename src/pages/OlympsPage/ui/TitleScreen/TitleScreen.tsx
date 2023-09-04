import cn from 'classnames'
import cls from './TitleScreen.module.scss'
import bgImage from '@shared/assets/images/olymps/bg/OlympsBgDesctop.jpg'
import Title, { TitleTheme } from '@shared/ui/Title/Title.tsx'
import Text from '@shared/ui/Text/Text.tsx'

type TitleScreenProps = {
  className?: string
}

export const TitleScreen = (props: TitleScreenProps) => {
  const { className = '' } = props

  return (
    <div className={cn(className, cls.TitleScreen)}>
      <div style={{ backgroundImage: `url(${bgImage})` }} className={cn(cls.TitleScreenInner)}>
        <Title className={cls.OlympName} theme={TitleTheme.H2} text="олимпиада по математике и криптографии" />

        <Text text={`олимпиада III уровня`} className={cls.OlympLevel} />
      </div>
    </div>
  )
}
