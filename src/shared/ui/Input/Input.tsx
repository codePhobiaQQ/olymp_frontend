import cls from './Input.module.scss';
import cn from 'classnames';
import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import { ReactComponent as EyeSvg } from '@shared/assets/svg/eyes/eye-open.svg';
import { ReactComponent as EyeCloseSvg } from '@shared/assets/svg/eyes/eye-closed.svg';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'className' | 'placeholder'>

export interface InputI extends HtmlInputProps {
  value?: string | number;
  onChange?: (value: string) => void;
  className?: string;
  placeholder?: string;
}

const Input = (props: InputI) => {
  const { className = '', value, onChange, placeholder, type, ...otherProps } = props;

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

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
    <div className={cn(className, cls.Input)}>
      <input type={buttonType} value={value} onChange={changeHandler} placeholder={placeholder} {...otherProps} />
      {type === 'password' && <>
        {buttonType === 'password' ? <EyeCloseSvg onClick={togglePasswordHandler} className={cls.Eye} /> :
          <EyeSvg onClick={togglePasswordHandler} className={cls.Eye} />}
      </>}
    </div>
  );
};

export default Input;
