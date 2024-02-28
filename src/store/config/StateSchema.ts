import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { CombinedState } from 'redux'
import { AxiosInstance } from 'axios'
import { NavigateOptions } from 'react-router'

export interface StateSchema {
	fullPageAPI?: any

	// counter: CounterSchema;
	// user: UserSchema;

	// Асинхронные редюсеры
	// loginForm?: LoginSchema;
	// profile?: ProfileSchema;
	// articleDetails?: ArticleDetailsSchema;
	// articleDetailsComments?: ArticleDetailsCommentsSchema;
	// addCommentForm?: AddCommentFormSchema;
	// articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
	add: (key: StateSchemaKey, reducer: Reducer) => void
	remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager
}

export interface ThunkExtraArg {
	api: AxiosInstance
	navigate?: (to: any, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
	rejectValue: T
	extra: ThunkExtraArg
	state: StateSchema
}
