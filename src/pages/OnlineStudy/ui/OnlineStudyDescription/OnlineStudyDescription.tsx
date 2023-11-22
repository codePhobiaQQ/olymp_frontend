import cn from 'classnames';
import cls from './OnlineStudyDescription.module.scss';
import { SectionWrapper } from '@shared/layouts/SectionWrapper/SectionWrapper.tsx';
import Title from '@shared/ui/Title/Title.tsx';
import { HStack, VStack } from '@shared/ui/Stack';
import Text from '@shared/ui/Text/Text.tsx';

type OnlineStudyDescriptionProps = {
  className?: string;

};

export const OnlineStudyDescription = (props: OnlineStudyDescriptionProps) => {
  const { className = '' } = props;

  return (
    <SectionWrapper size='middle' className={cn(className, cls.OnlineStudyDescription)}>
      <VStack gap='48'>
        <Title text='онлайн-образование' />
        <HStack align='start' justify='between'>
          <Text className={cn(cls.DescriptionText)} text='Современное интернет пространство
изобилует предложениями с бесплатными курсами, олимпиадами и конкурсами, не имеющими реальной ценности для абитуриентов при поступлении.' />
          <Text className={cn(cls.DescriptionText)} text='Данную проблему выбора решает портал  v-olymp.ru, на котором представлены:' />
        </HStack>
      </VStack>
    </SectionWrapper>
  );
};