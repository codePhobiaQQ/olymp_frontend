import cn from 'classnames';
import cls from './FadeIn.module.scss';
import { ReactNode } from 'react';

type FadeInProps = {
  children?: ReactNode
};

export const FadeIn = (props: FadeInProps) => {
  const { children } = props;

  return (
    <div className={cn(cls.FadeIn)}>
      {children}
    </div>
  );
};