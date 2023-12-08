import { StateSchema } from '@app/providers/storeProvider';

export const getIsAuthDialogOpen = (state: StateSchema) => state.app.isAuthDialogOpen || false
export const getIsMenuOpen = (state: StateSchema) => state.app.isMenuOpen || false