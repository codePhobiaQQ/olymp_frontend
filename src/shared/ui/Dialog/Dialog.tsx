import cn from 'classnames';
import cls from './Dialog.module.scss';
// import { Dialog as HeadlessuiDialog } from '@headlessui/react';
import { ReactNode } from 'react';
import { HStack } from '@shared/ui/Stack';

export interface DialogProps {
  className?: string;
  isOpen: boolean;
  closeHandler: () => void;
  children?: ReactNode;
}

export const Dialog = (props: DialogProps) => {
  const { className = '', isOpen,
    // closeHandler,
    children } = props;

  if (!isOpen) return null

  return (
    <HStack
      className={cn(cls.Dialog, className)}
      // open={isOpen}
      // onClose={closeHandler}
    >
        <HStack className={cn(cls.DialogInner)}>
          {children}
        </HStack>
    </HStack>
  );
};
