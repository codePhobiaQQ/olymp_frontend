import cn from 'classnames';
import cls from './Dialog.module.scss';
import { Dialog as HeadlessuiDialog } from '@headlessui/react';
import { forwardRef, ReactNode } from 'react';
import { HStack, VStack } from '@shared/ui/Stack';

export interface DialogProps {
  className?: string;
  isOpen: boolean;
  closeHandler: () => void;
  children?: ReactNode;
}

export const Dialog = forwardRef((props: DialogProps, ref) => {
  const { className = '', isOpen, closeHandler, children } = props;

  return (
    <HeadlessuiDialog
      className={cn(cls.Dialog, className)}
      open={isOpen}
      onClose={closeHandler}
    >
      {/*max justify='center' align='center'*/}
      <div ref={ref} className={cn(cls.DialogOuterWrapper)} >
        <HeadlessuiDialog.Panel className={cn(cls.DialogInner)}>
          {children}
        </HeadlessuiDialog.Panel>
      </div>
    </HeadlessuiDialog>
  );
});
