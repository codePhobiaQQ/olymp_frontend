import cls from './Input.module.scss';
import cn from 'classnames';
import { InputHTMLAttributes, useEffect, useState } from 'react';
import { ReactComponent as EyeSvg } from '@shared/assets/svg/eyes/eye-open.svg';
import { ReactComponent as EyeCloseSvg } from '@shared/assets/svg/eyes/eye-closed.svg';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'className' | 'placeholder'>

export interface InputProps extends HtmlInputProps {
  value?: string | number;
  onChangeCustom?: (value: string) => void;
  className?: string;
  placeholder?: string;
  maxSize?: boolean
  mayChangeValueInsideModule?: boolean
}

const Input = (props: InputProps) => {
  const { className = '', value, onChangeCustom, maxSize = false, mayChangeValueInsideModule = true, placeholder, type, ...otherProps } = props;

  const [inputValue, setInputValue] = useState<string>(value?.toString() || '')

  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value?.toString())
    }
  }, [value])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeCustom?.(e.target.value)

    if (mayChangeValueInsideModule) {
      setInputValue(e.target.value || '')
    }
  }

  const [buttonType, setButtonType] = useState<HtmlInputProps['type']>(type || 'string');

  const togglePasswordHandler = () => {
    if (type !== 'password') return;
    if (buttonType === 'string') {
      setButtonType('password');
    } else {
      setButtonType('string');
    }
  };

  return (
    <div className={cn(className, cls.Input, { [cls.maxSize]: maxSize, })}>
      <input type={buttonType}
             value={inputValue}
             onChange={onChangeHandler}
             placeholder={placeholder}
             {...otherProps} />
      {type === 'password' && <>
        {buttonType === 'password' ? <EyeCloseSvg onClick={togglePasswordHandler} className={cls.Eye} /> :
          <EyeSvg onClick={togglePasswordHandler} className={cls.Eye} />}
      </>}
    </div>
  );
};

export default Input;
