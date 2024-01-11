import cn from 'classnames';
import cls from './SectionWrapper.module.scss';
import { VStack } from '@shared/ui/Stack';
import { VStackProps } from '@shared/ui/Stack/VStack/VStack.tsx';

type sectionSizeType = 'default' | 'middle'
const sectionClsMapper: Record<sectionSizeType, string> = {
  'default': cls.default,
  'middle': cls.middle
}

type colorThemeType = 'white' | 'dark'
const colorThemeClsMapper: Record<colorThemeType, string> = {
  'white': cls.white,
  'dark': cls.dark
}

interface SectionWrapperProps extends VStackProps {
  size?: sectionSizeType
  colorTheme?: colorThemeType
};

export const SectionWrapper = (props: SectionWrapperProps) => {
  const { className = '', colorTheme = 'white', size = 'default', children } = props;

  return (
    <VStack className={cn(className, cls.SectionWrapper, sectionClsMapper[size], colorThemeClsMapper[colorTheme])}>
      {children}
    </VStack>
  );
};