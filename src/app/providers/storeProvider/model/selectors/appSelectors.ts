import { StateSchema } from '@app/providers/storeProvider';

export const getIsAuthDialogOpen = (state: StateSchema) => state.app.isAuthDialogOpen || false