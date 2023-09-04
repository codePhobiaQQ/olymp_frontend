import Text from '@shared/ui/Text/Text'
import cls from './PhraseScreen.module.css'
import cn from 'classnames'

interface PhraseScreenI {
  className?: string
}

const PhraseScreen = ({ className = '' }: PhraseScreenI) => {
  return (
    <div className={cn(className, cls.PhraseScreen)}>
      <Text className={cn(cls.MotivationPhrase)} text="”   Всё ближайшее время  определит образование   ”" />
    </div>
  )
}

export default PhraseScreen
