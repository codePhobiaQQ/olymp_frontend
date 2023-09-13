import cn from 'classnames'
import cls from './PresentationScreen.module.scss'
import { useSelector } from 'react-redux'
import {
  getPresentationButtonText1,
  // getPresentationButtonText2,
  getPresentationScreenNumb1,
  getPresentationScreenNumb2,
  getPresentationText1,
  getPresentationText2,
} from '@pages/MainPage/model/selectors/mainPageSelectors'
import Button from '@shared/ui/Button/Button'
import { HStack, VStack } from '@shared/ui/Stack'
import { WpTextFormatter } from '@shared/ui/WpTextFormatter/WpTextFormatter.tsx'

type PresentationScreenProps = {
  className?: string
}

export const PresentationScreen = (props: PresentationScreenProps) => {
  const { className } = props
  const numb1 = useSelector(getPresentationScreenNumb1)
  const numb2 = useSelector(getPresentationScreenNumb2)
  const text1 = useSelector(getPresentationText1)
  const text2 = useSelector(getPresentationText2)
  const buttonText1 = useSelector(getPresentationButtonText1)
  // const buttonText2 = useSelector(getPresentationButtonText2)

  return (
    <section className={cn(className, cls.PresentationScreen)}>
      <div className={cn(cls.DecorLine)}></div>

      <HStack align="center" justify="between" className={cn('container')}>
        <div className={cn(cls.NumberSide)}>{numb1}</div>

        <VStack className={cn(cls.RightSide)}>
          <VStack gap="16" className={cn(cls.RightSideInner)}>
            <WpTextFormatter className={cn(cls.Content)} content={text1} />
            <Button className={cn(cls.PresentationBtn)} variant="outline_transparent_arrow">
              {buttonText1}
            </Button>
          </VStack>
        </VStack>
      </HStack>

      <div className={cn(cls.DecorLine)}></div>

      <HStack align="center" justify="between" className={cn('container')}>
        <div className={cn(cls.NumberSide)}>{numb2}</div>

        <VStack className={cn(cls.RightSide)}>
          <VStack gap="16" className={cn(cls.RightSideInner)}>
            <WpTextFormatter className={cn(cls.Content)} content={text2} />
            <Button className={cn(cls.PresentationBtn)} variant="outline_transparent_arrow">
              {buttonText1}
            </Button>
          </VStack>
        </VStack>
      </HStack>

      <div className={cn(cls.DecorLine)}></div>
    </section>
  )
}
