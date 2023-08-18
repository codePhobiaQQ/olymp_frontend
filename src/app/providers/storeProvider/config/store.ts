import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { CombinedState, Reducer } from 'redux'
import { StateSchema } from './StateSchema'
import { createReducerManager } from './reducerManager'
import { fullpageReducer } from '@features/FullPage/model/slice/fullPageSlice'
import { rtkApi } from '@shared/api/rtkApi'

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    fullPage: fullpageReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: true,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        // thunk: {
        //   extraArgument: {},
        // },
      }),
  })

  // @ts-ignore
  store.reducerManager = reducerManager
  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']