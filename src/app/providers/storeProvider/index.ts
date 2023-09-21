import { StoreProvider } from './ui/StoreProvider'
import { createReduxStore } from './config/store'
import type { AppDispatch } from './config/store'
import type { StateSchema, StateSchemaKey, ReduxStoreWithManager, ThunkConfig } from './config/StateSchema'

export { StoreProvider, createReduxStore, ReduxStoreWithManager, StateSchema, StateSchemaKey, AppDispatch, ThunkConfig }

// App actions
export { AppActions } from './model/slice/appSlice.ts'
export { getIsAuthDialogOpen } from './model/selectors/appSelectors.ts'