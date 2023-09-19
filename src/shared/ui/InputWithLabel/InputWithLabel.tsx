import cn from 'classnames';
import cls from './InputWithLabel.module.scss';
import Input, { InputI } from '@shared/ui/Input/Input.tsx';
import { VStack } from '@shared/ui/Stack';

interface InputWithLabelProps extends InputI {
  className?: string;
  label: string
};

export const InputWithLabel = (props: InputWithLabelProps) => {
  const { className = '', label } = props;

  return (
    <VStack gap='8' className={cn(className, cls.InputWithLabel)}>
      <label className={cn(cls.Label)} htmlFor='123'>{label}</label>
      <Input id='123' />
    </VStack>
  );
};