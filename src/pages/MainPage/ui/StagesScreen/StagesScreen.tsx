import cn from 'classnames'
import cls from './StagesScreen.module.scss'
import { ReactComponent as Circles } from '@shared/assets/images/svg/circles.svg'
import Title, { TitleTheme } from '@shared/ui/Title/Title'
import Text from '@shared/ui/Text/Text'
import Button from '@shared/ui/Button/Button'

type StagesScreenProps = {
  className?: string;
};

export const StagesScreen = (props: StagesScreenProps) => {
  const { className } = props

  return (
    <div className={cn(className, cls.StagesScreen)}>

      <div className={cn(cls.LeftSide)}>
        <Title theme={TitleTheme.H2} text={'Этапы олимпиад'} />
        <Circles className={cn(cls.Circles)} />
        <div></div>
      </div>

      <div className={cn(cls.RightSide)}>
        <div className={cn(cls.Stage)}>
          <div className={cn(cls.StageDecore)}>
            <Text className={cls.StageNumber} text={'01'} />
            <div className={cn(cls.Line)}></div>
          </div>
          <div className={cn(cls.StageContent)}>
            <Title text='Ознакомительный этап' className={cls.StageTitle} theme={TitleTheme.H4} />
            <Text className={cls.StageText} text='Возможность прохождения данного этапа предоставляется всем зарегистрированным на сайте школьникам.
Ознакомительный этап предназначается для знакомства с системой проведения дистанционных этапов олимпиад на нашем сайте. Вам предоставляется возможность посмотреть в каком формате задаются вопросы и как корректно вводить ответы.' />
            <Button className={cls.Btn} variant='outline_transparent_arrow'>Выбрать олимпиаду</Button>
          </div>
        </div>

        <div className={cn(cls.Stage)}>
          <div className={cn(cls.StageDecore)}>
            <Text className={cls.StageNumber} text={'01'} />
            <div className={cn(cls.Line)}></div>
          </div>

          <div className={cn(cls.StageContent)}>
            <Title text='Ознакомительный этап' className={cls.StageTitle} theme={TitleTheme.H4} />
            <Text className={cls.StageText} text='Возможность прохождения данного этапа предоставляется всем зарегистрированным на сайте школьникам.
Ознакомительный этап предназначается для знакомства с системой проведения дистанционных этапов олимпиад на нашем сайте. Вам предоставляется возможность посмотреть в каком формате задаются вопросы и как корректно вводить ответы.' />
            <Button className={cls.Btn} variant='outline_transparent_arrow'>Выбрать олимпиаду</Button>
          </div>
        </div>

        <div className={cn(cls.Stage)}>
          <div className={cn(cls.StageDecore)}>
            <Text className={cls.StageNumber} text={'01'} />
            <div className={cn(cls.Line)}></div>
          </div>
          <div className={cn(cls.StageContent)}>
            <Title text='Ознакомительный этап' className={cls.StageTitle} theme={TitleTheme.H4} />
            <Text className={cls.StageText} text='Возможность прохождения данного этапа предоставляется всем зарегистрированным на сайте школьникам.
Ознакомительный этап предназначается для знакомства с системой проведения дистанционных этапов олимпиад на нашем сайте. Вам предоставляется возможность посмотреть в каком формате задаются вопросы и как корректно вводить ответы.' />
            <Button className={cls.Btn} variant='outline_transparent_arrow'>Выбрать олимпиаду</Button>
          </div>
        </div>
      </div>
    </div>
  )
}