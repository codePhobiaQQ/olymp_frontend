import cn from 'classnames';
import cls from './Dialog.module.scss';
import { Dialog as HeadlessuiDialog } from '@headlessui/react';
import { ReactNode } from 'react';

export interface DialogProps {
  className?: string;
  isOpen: boolean;
  closeHandler: () => void;
  children?: ReactNode;
}

export const Dialog = (props: DialogProps) => {
  const { className = '', isOpen, closeHandler, children } = props;

  return (
      <HeadlessuiDialog
        className={cn(cls.Dialog, className)}
        open={isOpen}
        onClose={closeHandler}
      >
        <HeadlessuiDialog.Panel className={cn(cls.DialogInner)}>
          {children}
        </HeadlessuiDialog.Panel>
      </HeadlessuiDialog>
  );
};
