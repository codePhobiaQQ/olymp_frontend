import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { CombinedState, Reducer } from 'redux'
import { StateSchema } from './StateSchema'
import { createReducerManager } from './reducerManager'
import { fullpageReducer } from '@features/FullPage/model/slice/fullPageSlice'

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    fullPage: fullpageReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  // const extraArg: ThunkExtraArg = {
  // 	api: $api,
  // 	navigate,
  // }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: true,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        // thunk: {
        // 	extraArgument: extraArg,
        // },
      }),
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
