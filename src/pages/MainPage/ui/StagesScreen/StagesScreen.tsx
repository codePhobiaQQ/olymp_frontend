import cn from 'classnames';
import cls from './StagesScreen.module.scss';
import Text from '@shared/ui/Text/Text';
import Button from '@shared/ui/Button/Button';
import { SectionTitle } from '@shared/ui/titles';
import { Title } from '@shared/ui/titles';
import { SectionWrapper } from '@shared/layouts';
import { HStack, VStack } from '@shared/ui/Stack';

type StagesScreenProps = {
  className?: string;
};

export const StagesScreen = (props: StagesScreenProps) => {
  const { className } = props;

  return (
    <SectionWrapper className={cn(className, cls.StagesScreen)}>
      <VStack max gap='60'>
        <SectionTitle text='Этапы олимпиад' />

        <HStack align='start' gap='40' max justify='between'>

          <VStack gap='24' className={cn(cls.Stage, 'WithDecorLineComponent')}>
            <Title text='Ознакомительный этап' className={cls.StageTitle} tag='h3' />
            <Text className={cls.StageText} text='Возможность прохождения данного этапа предоставляется всем зарегистрированным на сайте школьникам.
Ознакомительный этап предназначается для знакомства с системой проведения дистанционных этапов олимпиад на нашем сайте. Вам предоставляется возможность посмотреть в каком формате задаются вопросы и как корректно вводить ответы.' />
          </VStack>


          <VStack gap='24' className={cn(cls.Stage, 'WithDecorLineComponent')}>
            <Title text='Отборочный (дистанционный) этап' className={cls.StageTitle} tag='h3' />
            <Text className={cls.StageText} text='Для обеспечения возможности участия школьникам из всех регионов отборочный этап Олимпиады проводится в заочной форме на нашем сайте.
Даты начала и окончания Отборочного этапа нужной олимпиады Вы можете узнать из Расписания олимпиад. ' />
          </VStack>

          <VStack gap='24' className={cn(cls.Stage, 'WithDecorLineComponent')}>
            <Title text='Заключительный этап' className={cls.StageTitle} tag='h4' />
            <Text className={cls.StageText} text='Дату проведения заключительного этапа нужной олимпиады Вы можете узнать из Расписания олимпиад.
Для того, чтобы стать призёром или победителем этого этапа, необходимо либо стать призёром Отборочного этапа, либо быть призёром аналогичной олимпиады прошлого года.' />
          </VStack>
        </HStack>

        <Button textProps={{ text: 'Выбрать олимпиаду'}} />
      </VStack>
    </SectionWrapper>
  );
};