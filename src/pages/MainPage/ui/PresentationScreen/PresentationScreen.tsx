import cn from 'classnames'
import cls from './PresentationScreen.module.scss'
import { useSelector } from 'react-redux'
import {
  getPresentationButtonText1, getPresentationButtonText2,
  getPresentationScreenNumb1,
  getPresentationScreenNumb2, getPresentationText1, getPresentationText2,
} from '@pages/MainPage/model/selectors/mainPageSelectors'
import Button from '@shared/ui/Button/Button'

type PresentationScreenProps = {
  className?: string;
};

export const PresentationScreen = (props: PresentationScreenProps) => {
  const { className } = props
  const numb1 = useSelector(getPresentationScreenNumb1)
  const numb2 = useSelector(getPresentationScreenNumb2)
  const text1 = useSelector(getPresentationText1)
  const text2 = useSelector(getPresentationText2)
  const buttonText1 = useSelector(getPresentationButtonText1)
  const buttonText2 = useSelector(getPresentationButtonText2)

  return (
    <section className={cn(className, cls.PresentationScreen)}>
      <div className={cn(cls.DecorLine)}></div>

      <div className={cn('container', 'flex', 'items-center', 'justify-between')}>
        <div className={cn(cls.NumberSide)}>
          {numb1}
        </div>
        <div className={cn(cls.RightSide)}>
          <div className={cn(cls.RightSideInner)}>
            {text1}
            <Button variant={'outline_transparent_arrow'}>{buttonText1}</Button>
          </div>
        </div>
      </div>

      <div className={cn(cls.DecorLine)}></div>

      <div className={cn('container', 'flex', 'items-center', 'justify-between')}>
        <div className={cn(cls.NumberSide)}>
          {numb2}
        </div>
        <div className={cn(cls.RightSide)}>
          <div className={cn(cls.RightSideInner)}>
            {text2}
            <Button variant={'outline_transparent_arrow'}>{buttonText2}</Button>
          </div>
        </div>
      </div>

      <div className={cn(cls.DecorLine)}></div>
    </section>
  )
}