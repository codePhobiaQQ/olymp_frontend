import { StateSchema } from '@app/providers/storeProvider';

export const getIsAuthDialogLoading = (state: StateSchema) => state.authDialog?.isLoading || false