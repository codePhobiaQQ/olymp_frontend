import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { ReactComponent as Arrow } from '@shared/assets/images/svg/arrow.svg';
import cls from './Button.module.scss';
import cn from 'classnames';

type sizeType = 's' | 'm' | 'l' | 'xl'
type variantType = 'outline_transparent_arrow' | 'default' | 'outline_transparent' | 'only_text' |
  'auth'
type colorTheme = 'dark' | 'light' | 'blue_transparent' | 'blue_fill' | 'grey_transparent'

interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  variant?: variantType;
  colorTheme?: colorTheme;
  size?: sizeType;
}

const sizeClsMapper: Record<sizeType, string> = {
  s: cls.s,
  m: cls.m,
  l: cls.l,
  xl: cls.xl
};
const variantsClsMapper: Record<variantType, string> = {
  default: cls.default,
  auth: cls.auth,
  outline_transparent_arrow: cls.outline_transparent_arrow,
  outline_transparent: cls.outline_transparent,
  only_text: cls.only_text
};
const colorThemeClsMapper: Record<colorTheme, string> = {
  light: cls.light,
  dark: cls.dark,
  blue_transparent: cls.blueTransparent,
  blue_fill: cls.blueFill,
  grey_transparent: cls.grey_transparent
};

const Button = (props: ButtonI) => {
  const {
    variant = 'outline_transparent_arrow',
    children,
    className,
    onClick,
    colorTheme,
    size = 'm',
    ...otherProps
  } = props;
  const hasArrow = variant === 'outline_transparent_arrow';

  return (
    <button
      onClick={onClick}
      className={cn(cls.Button, variantsClsMapper[variant], sizeClsMapper[size], colorTheme && colorThemeClsMapper[colorTheme], className)}
      {...otherProps}
    >
      {children}
      {hasArrow && <Arrow />}
    </button>
  );
};

export default memo(Button);
