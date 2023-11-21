import cn from 'classnames';
import cls from './SectionWrapper.module.scss';
import { ReactNode } from 'react';
import { VStack } from '@shared/ui/Stack';

type SectionWrapperProps = {
  className?: string;
  children?: ReactNode
};

export const SectionWrapper = (props: SectionWrapperProps) => {
  const { className = '', children } = props;

  return (
    <VStack className={cn(className, cls.SectionWrapper)}>
      {children}
    </VStack>
  );
};