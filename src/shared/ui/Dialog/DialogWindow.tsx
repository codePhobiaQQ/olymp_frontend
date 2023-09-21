import cn from 'classnames';
import cls from './Dialog.module.scss';
import { ReactNode } from 'react';
import { ReactComponent as CancelSvg } from '@shared/assets/svg/decor/cancel.svg';
import { VStack } from '@shared/ui/Stack';

type DialogWindowProps = {
  className?: string;
  children?: ReactNode
  closeHandler?: () => void;
};

export const DialogWindow = (props: DialogWindowProps) => {
  const { className = '', children, closeHandler } = props;

  return (
    <div  className={cn(className, cls.DialogWindow)}>
      {closeHandler && <VStack justify='center' align='center' className={cls.Close}>
        <CancelSvg onClick={closeHandler} className={cn(cls.CloseIcon)} />
      </VStack>}

      {children}
    </div>
  );
};