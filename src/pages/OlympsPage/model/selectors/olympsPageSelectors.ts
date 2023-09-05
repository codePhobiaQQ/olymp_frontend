import { StateSchema } from '@app/providers/storeProvider'

export const getOlympsList = (state: StateSchema) => state.olympsPage?.olympsData || []
export const getIsLoading = (state: StateSchema) => state.olympsPage?.isLoading || false
export const getError = (state: StateSchema) => state.olympsPage?.error || ''
