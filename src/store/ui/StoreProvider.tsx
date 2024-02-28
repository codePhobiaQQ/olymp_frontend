import { StateSchema } from './../config/StateSchema'
import { createReduxStore } from './../config/store'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

const store = createReduxStore({} as StateSchema, {} as ReducersMapObject<StateSchema>)

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props
  return <Provider store={store}>{children}</Provider>
}
