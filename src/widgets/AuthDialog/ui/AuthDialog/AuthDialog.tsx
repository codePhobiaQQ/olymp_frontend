import cn from 'classnames';
import cls from './AuthDialog.module.scss';
import {DynamicModuleLoader, ReducersList} from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx';
import {AuthDialogReducer} from './../../model/slices/AuthDialogSlice.ts';
import {Dialog} from '@shared/ui/Dialog/Dialog.tsx';
import {DialogWindow} from '@shared/ui/Dialog/DialogWindow.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {AppActions, getIsAuthDialogOpen} from '@app/providers/storeProvider';
import {useFade} from '@shared/lib/animations/fade/useFade.ts';
import {AnimationProvider} from '@shared/lib/components/AnimationProvider/AnimationProvider.tsx';
// import {LoginTab} from "@widgets/AuthDialog/ui/tabs/LoginTab/LoginTab.tsx";
import {ForgotPasswordTab} from "@widgets/AuthDialog/ui/tabs/ForgotPasswordTab/ForgotPasswordTab.tsx";

const reducers: ReducersList = {
  authDialog: AuthDialogReducer
};

export const AuthDialogAsync = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(getIsAuthDialogOpen);

  const openHandler = () => {
    console.log('open');
  };

  const closeHandler = () => {
    dispatch(AppActions.setIsAuthDialogOpen(false));
    console.log('after close');
  };
  const {ref: animationRef} = useFade({isOpen, onCloseComplete: closeHandler, onOpenComplete: openHandler});

  return (
    <Dialog ref={animationRef} isOpen={isOpen} closeHandler={closeHandler}>
      <DialogWindow closeHandler={closeHandler} className={cn(cls.AuthDialog)}>
        {/*<LoginTab />*/}
        <ForgotPasswordTab />
      </DialogWindow>
    </Dialog>
  );
};

export const AuthDialog = () => {
  return (
    <DynamicModuleLoader removeAfterUnmount={true} reducers={reducers}>
      <AnimationProvider>
        <AuthDialogAsync/>
      </AnimationProvider>
    </DynamicModuleLoader>
  );
};