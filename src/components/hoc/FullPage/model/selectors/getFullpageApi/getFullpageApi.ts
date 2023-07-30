import { StateSchema } from '@/store'
import { FullPageSchema } from './../../types/fullPage'

export const getFullPageApi = (state: StateSchema) => state.fullPage?.fullpageApi
