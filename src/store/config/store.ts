import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
// import { NavigateOptions } from 'react-router'
import { CombinedState, Reducer } from 'redux'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { createReducerManager } from './reducerManager'
// import { $api } from '@/core/api/api'
import { fullpageReducer } from '@/components/hoc/FullPage/model/slice/fullPageSlice'
import { NavigateOptions } from 'react-router-dom'

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
	navigate?: (to: any, options?: NavigateOptions) => void
) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		// ...asyncReducers,
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
		middleware: getDefaultMiddleware =>
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
