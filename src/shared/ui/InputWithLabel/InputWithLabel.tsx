import cn from 'classnames';
import cls from './InputWithLabel.module.scss';
import Input, { InputProps } from '@shared/ui/Input/Input.tsx';
import { HStack, VStack } from '@shared/ui/Stack';
import {ReactNode, useId} from 'react';

interface InputWithLabelProps extends InputProps {
  className?: string;
  label: string
  extraLabelComponent?: ReactNode
};

export const InputWithLabel = (props: InputWithLabelProps) => {
  const { className = '', label, extraLabelComponent, ...args } = props;

  const inputId = useId()

  return (
    <VStack gap='8' max className={cn(className, cls.InputWithLabel)}>
      <HStack max justify='between'>
        <label className={cn(cls.Label)} htmlFor={inputId}>{label}</label>
        {extraLabelComponent}
      </HStack>
      <Input id={inputId} {...args} />
    </VStack>
  );
};