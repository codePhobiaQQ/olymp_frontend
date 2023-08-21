import { StateSchema } from '@app/providers/storeProvider'

export const getIsLoading = (state: StateSchema) => state.newsCategories?.isLoading || false
export const getError = (state: StateSchema) => state.newsCategories?.error || ''
export const getCategories = (state: StateSchema) => state.newsCategories?.categories || []