import cn from 'classnames'
import cls from './StagesScreen.module.scss'
import { ReactComponent as Circles } from '@shared/assets/images/svg/circles.svg'
import Text from '@shared/ui/Text/Text'
import Button from '@shared/ui/Button/Button'
import {VStack} from "@shared/ui/Stack";
import {Title as SectionTitle} from "@shared/ui/SectionTitle/Title.tsx";
import Title, {TitleTheme} from "@shared/ui/Title/Title.tsx";

type StagesScreenProps = {
  className?: string;
};

export const StagesScreen = (props: StagesScreenProps) => {
  const { className } = props

  return (
    <div className={cn(className, cls.StagesScreen)}>

      <VStack justify='between' className={cn(cls.LeftSide)}>
        <SectionTitle className={cn(cls.SectionTitle)} variant='h2'>Этапы олимпиад</SectionTitle>
        <Circles className={cn(cls.Circles)} />
        <div></div>
      </VStack>

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