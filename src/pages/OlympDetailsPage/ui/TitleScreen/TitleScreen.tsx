import cn from 'classnames'
import cls from './TitleScreen.module.scss'
import Title from '@shared/ui/titles/Title/Title.tsx'
import Text from '@shared/ui/Text/Text.tsx'
import { useSelector } from 'react-redux'
import {
  getOlympLevel,
  getOlympName,
  getOlympPreviewImage,
} from '@pages/OlympDetailsPage/model/selectors/olympDetailsSelectors.ts'

type TitleScreenProps = {
  className?: string
}

const levelToRim = (level: number): string => {
  return Array(level).fill('I').join('')
}

export const TitleScreen = (props: TitleScreenProps) => {
  const { className = '' } = props

  const name = useSelector(getOlympName)
  const level = useSelector(getOlympLevel)
  const image = useSelector(getOlympPreviewImage)

  return (
    <div className={cn(className, cls.TitleScreen)}>
      <div style={{ backgroundImage: `url(${image})` }} className={cn(cls.TitleScreenInner)}>
        <Title className={cls.OlympName} tag='h2' text={name} />
        <Text text={`олимпиада ${levelToRim(Number(level))} уровня`} className={cls.OlympLevel} />
      </div>
    </div>
  )
}
