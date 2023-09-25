import Text from '@shared/ui/Text/Text'
import cls from './PhraseScreen.module.css'
import cn from 'classnames'
import {HStack} from "@shared/ui/Stack";

interface PhraseScreenI {
  className?: string
}

const PhraseScreen = ({ className = '' }: PhraseScreenI) => {
  return (
    <HStack className={cn(className, cls.PhraseScreen)}>
      <Text align='center' className={cn(cls.MotivationPhrase)} text="”   Всё ближайшее время  определит образование   ”" />
    </HStack>
  )
}

export default PhraseScreen
