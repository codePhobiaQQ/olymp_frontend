import cn from 'classnames';
import cls from './SectionWrapper.module.scss';
import { ReactNode } from 'react';
import { VStack } from '@shared/ui/Stack';

type sectionSizeType = 'default' | 'middle'
const sectionClsMapper: Record<sectionSizeType, string> = {
  'default': cls.default,
  'middle': cls.middle
}

type SectionWrapperProps = {
  className?: string;
  children?: ReactNode
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