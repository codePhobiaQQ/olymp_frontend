import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { CombinedState } from 'redux'
import { AxiosInstance } from 'axios'
import { NavigateOptions } from 'react-router'
import { NewsPageSchema } from '@pages/NewsPage'
import { MainPageSchema } from '@pages/MainPage'
import { NewsCategoriesSchema } from '@features/fetchNewsCategories/model/types/newsCategoriesSchema'
import { OlympsPageSchema } from '@pages/OlympsPage'
import { OlympDetailsSchema } from '@pages/OlympDetailsPage'
import { AuthDialogSchema } from '@widgets/AuthDialog';
import { AppSchema } from './../model/types/appSchema.ts';

export interface StateSchema {
  app: AppSchema

  // Асинхронные редюсеры
  // MainPage
  mainPage?: MainPageSchema

  // --- Auth Dialog ---
  authDialog?: AuthDialogSchema
  // --- News ---
  newsPage?: NewsPageSchema
  newsCategories?: NewsCategoriesSchema
  // --- Olymps ---
  olympsPage?: OlympsPageSchema
  olympDetailsPage?: OlympDetailsSchema
}

export type StateSchemaKey = keyof StateSchema

export type MountedReducers = PartialRecord<StateSchemaKey, boolean>

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
