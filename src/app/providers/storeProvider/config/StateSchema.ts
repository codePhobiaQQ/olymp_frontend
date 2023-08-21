import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { CombinedState } from 'redux'
import { AxiosInstance } from 'axios'
import { NavigateOptions } from 'react-router'
import { FullPageSchema } from '@features/FullPage/model/types/fullPage'
import { NewsPageSchema } from '@pages/NewsPage'
import { NewsCategoriesSchema } from '@features/fetchNewsCategories/model/types/newsCategoriesSchema'

export interface StateSchema {
  fullPage: FullPageSchema

  // Асинхронные редюсеры
  newsPage?: NewsPageSchema
  newsCategories?: NewsCategoriesSchema
}

export type StateSchemaKey = keyof StateSchema

export type MountedReducers = PartialRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  getMountedReducers: () => MountedReducers
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
