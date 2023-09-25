import cn from 'classnames';
import cls from './AuthDialog.module.scss';
import {DynamicModuleLoader, ReducersList} from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx';
import {AuthDialogActions, AuthDialogReducer} from './../../model/slices/AuthDialogSlice.ts';
import {Dialog} from '@shared/ui/Dialog/Dialog.tsx';
import {DialogWindow} from '@shared/ui/Dialog/DialogWindow.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {AppActions, getIsAuthDialogOpen} from '@app/providers/storeProvider';
import {ForgotPasswordTab} from "@widgets/AuthDialog/ui/tabs/ForgotPasswordTab/ForgotPasswordTab.tsx";
import {getActiveAuthTab} from "@widgets/AuthDialog/model/selectors/authDialogSelectors.ts";
import {tabType} from "@widgets/AuthDialog/model/types/AuthDialogSchema.ts";
import {ReactNode, useCallback, useEffect} from "react";
import {LoginTab} from "@widgets/AuthDialog/ui/tabs/LoginTab/LoginTab.tsx";

const reducers: ReducersList = {
  authDialog: AuthDialogReducer
};

const tabsController: Record<tabType, ReactNode> = {
  'login': <LoginTab/>,
  'forgotPassword': <ForgotPasswordTab/>,
  'registration_shared': <>registration_shared</>,
  'registration_students': <>registration_students</>,
  'registration_teachers': <>registration_teachers</>,
  'registration_universities': <>registration_universities</>,
}

export const AuthDialog = () => {
  const isOpen = useSelector(getIsAuthDialogOpen);
  const {initDialog} = AuthDialogActions
  const dispatch = useDispatch();
  const activeTab = useSelector(getActiveAuthTab)

  useEffect(() => {
    dispatch(initDialog({}))
  }, [isOpen])

  const closeHandler = useCallback(() => {
    dispatch(AppActions.setIsAuthDialogOpen(false));
  }, [dispatch, AppActions.setIsAuthDialogOpen]);

  return (
    <DynamicModuleLoader removeAfterUnmount={true} reducers={reducers}>
      <Dialog isOpen={isOpen} closeHandler={closeHandler}>
        <DialogWindow
          closeHandler={closeHandler}
          className={cn(cls.AuthDialog)}>
          {tabsController[activeTab]}
        </DialogWindow>
      </Dialog>
    </DynamicModuleLoader>
  );
};