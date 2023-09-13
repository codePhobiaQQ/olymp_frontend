import cn from 'classnames'
import cls from './BenefitsScreen.module.scss'
import {HStack, VStack} from '@shared/ui/Stack'
import {WpTextFormatter} from '@shared/ui/WpTextFormatter/WpTextFormatter.tsx'
import Button from "@shared/ui/Button/Button.tsx";
import AppImage from "@shared/ui/AppImage/AppImage.tsx";
import OlympImage from '@shared/assets/images/actions/2.jpg'

type BenefitsScreenProps = {
  className?: string
}

export const BenefitsScreen = (props: BenefitsScreenProps) => {
  const {className = ''} = props

  return (
    <HStack gap='64' justify="between" className={cn(className, cls.BenefitsScreen)}>
      <VStack gap='40' className={cn(cls.LeftSide)}>
        <WpTextFormatter
          className={cn(cls.Content)}
          content="Участвуя в олимпиадах, входящих
          в перечень, вы получаете шанс поступить в выбранное вами высшее учебное заведение без сдачи вступительных испытаний"
        />
        <Button variant='outline_transparent_arrow'>Подробнее о льготах</Button>
      </VStack>

      <VStack className={cn(cls.RightSide)}><AppImage className={cn(cls.BenefitsImage)} src={OlympImage} /></VStack>
    </HStack>
  )
}
