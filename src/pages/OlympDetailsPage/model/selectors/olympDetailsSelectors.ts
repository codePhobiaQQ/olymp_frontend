import { StateSchema } from '@app/providers/storeProvider'

export const getOlympName = (state: StateSchema) => state.olympDetailsPage?.data?.olymp_name || ''
export const getOlympPreviewImage = (state: StateSchema) => state.olympDetailsPage?.data?.olymp_preview_image || ''
export const getOlympLevel = (state: StateSchema) => state.olympDetailsPage?.data?.olymp_level || ''
export const getIsLoading = (state: StateSchema) => state.olympDetailsPage?.isLoading || false
export const getError = (state: StateSchema) => state.olympDetailsPage?.error || ''
