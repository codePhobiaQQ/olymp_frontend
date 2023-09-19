import cn from 'classnames';
import cls from './AuthDialog.module.scss';
import { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx';
import { ReactComponent as Logo } from '@shared/assets/svg/logo/fullLogo.svg'
import { AuthDialogReducer } from './../../model/slices/AuthDialogSlice.ts';
import { Dialog } from '@shared/ui/Dialog/Dialog.tsx';
import { DialogWindow } from '@shared/ui/Dialog/DialogWindow.tsx';
import { VStack } from '@shared/ui/Stack';
import Text from '@shared/ui/Text/Text.tsx';
import { InputWithLabel } from '@shared/ui/InputWithLabel/InputWithLabel.tsx';

const reducers: ReducersList = {
  authDialog: AuthDialogReducer
};

export const AuthDialogAsync = memo(() => {
  return (
    <Dialog isOpen={true} closeHandler={() => {}}>
      <DialogWindow closeHandler={() => {}} className={cn(cls.AuthDialog)}>
        <VStack align='center' max gap='60'>
          <Logo className={cn(cls.Logo)} />

          <VStack align='center' max gap='24'>
            <Text text='Вход в аккаунт' />
            <InputWithLabel label={'E-mail'} />
            <InputWithLabel label={'Пароль'} />
          </VStack>
        </VStack>
      </DialogWindow>
    </Dialog>
  );
});

export const AuthDialog = memo(() => {
  return (
    <DynamicModuleLoader removeAfterUnmount={true} reducers={reducers}>
      <AuthDialogAsync />
    </DynamicModuleLoader>
  );
});