import cn from 'classnames';
import cls from './SectionWrapper.module.scss';
import { VStack } from '@shared/ui/Stack';
import { VStackProps } from '@shared/ui/Stack/VStack/VStack.tsx';

type sectionSizeType = 'default' | 'middle'
const sectionClsMapper: Record<sectionSizeType, string> = {
  'default': cls.default,
  'middle': cls.middle
}

interface SectionWrapperProps extends VStackProps {
  size?: sectionSizeType
};

export const SectionWrapper = (props: SectionWrapperProps) => {
  const { className = '', size = 'default', children } = props;

  return (
    <VStack className={cn(className, cls.SectionWrapper, sectionClsMapper[size])}>
      {children}
    </VStack>
  );
};