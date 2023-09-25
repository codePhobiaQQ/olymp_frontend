import { StateSchema } from '@app/providers/storeProvider';

export const getIsAuthDialogLoading = (state: StateSchema) => state.authDialog?.isLoading || false

export const getActiveAuthTab = (state: StateSchema) => state.authDialog?.activeTab || 'login'