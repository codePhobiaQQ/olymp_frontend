import { ReactNode } from 'react';
import cls from './Text.module.scss';
import cn from 'classnames';

type colorThemeType = 'white' | 'dark';
const colorClsMapper: Record<colorThemeType, string> = {
  dark: cls.dark,
  white: cls.white,
};

type weightType = 'regular' | 'medium' | 'bold'
const weightClsMapper: Record<weightType, string> = {
  'bold': cls.bold,
  'medium': cls.medium,
  'regular': cls.regular,
}

type sizeType = '10' | '12' | '14' | '16' | '18' | '20' | '22' | '24' | '26';
const sizeClsMapper: Record<sizeType, string> = {
  '10': cls.px10,
  '12': cls.px12,
  '14': cls.px14,
  '16': cls.px16,
  '18': cls.px18,
  '20': cls.px20,
  '22': cls.px22,
  '24': cls.px24,
  '26': cls.px26,
};

type alignType = 'left' | 'center' | 'right';
const alignClsMapper: Record<alignType, string> = {
  left: cls.alignLeft,
  center: cls.alignCenter,
  right: cls.alignRight,
};

interface TextI {
  className?: string;
  text?: string;
  children?: ReactNode;
  isParagraph?: boolean;
  color?: colorThemeType;
  size?: sizeType;
  dataAttr?: string;
  weight?: weightType,
  align?: alignType;
  clickHandler?: () => void;
  styling?: { [name: string]: string };
}

const Text = (data: TextI) => {
  const {
    className = '',
    text,
    isParagraph = false,
    dataAttr = '',
    color = 'dark',
    weight = 'regular',
    size = '16',
    align = 'left',
    children,
    clickHandler = () => {},
    styling = {},
  } = data;

  const classing = cn(
    className,
    cls.Text,
    colorClsMapper[color],
    sizeClsMapper[size],
    alignClsMapper[align],
    weightClsMapper[weight],
    cls[color]
  );

  if (isParagraph) {
    return (
      <p
        onClick={clickHandler}
        data-attr={dataAttr}
        className={classing}
        style={styling}
      >
        {text || children}
      </p>
    );
  }

  if (!isParagraph) {
    return (
      <span
        onClick={clickHandler}
        data-attr={dataAttr}
        className={cn(classing, cls.span)}
        style={styling}
      >
        {text || children}
      </span>
    );
  }

  return null;
};

export default Text;
