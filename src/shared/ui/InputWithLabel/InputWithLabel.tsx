import cn from 'classnames';
import cls from './InputWithLabel.module.scss';
import Input, { InputI } from '@shared/ui/Input/Input.tsx';
import { HStack, VStack } from '@shared/ui/Stack';
import { ReactNode } from 'react';

interface InputWithLabelProps extends InputI {
  className?: string;
  label: string
  extraLabelComponent?: ReactNode
};

export const InputWithLabel = (props: InputWithLabelProps) => {
  const { className = '', label, extraLabelComponent, ...args } = props;

  return (
    <VStack gap='8' max className={cn(className, cls.InputWithLabel)}>
      <HStack max justify='between'>
        <label className={cn(cls.Label)} htmlFor='123'>{label}</label>
        {extraLabelComponent}
      </HStack>
      <Input id='123' {...args} />
    </VStack>
  );
};