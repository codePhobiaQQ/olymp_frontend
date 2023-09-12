import { StateSchema } from '@app/providers/storeProvider'

export const getFullName = (state: StateSchema) =>
  state.olympDetailsPage?.data?.official_information?.olymp_full_name || ''
export const getOlympOrgs = (state: StateSchema) =>
  state.olympDetailsPage?.data?.official_information?.olymp_organisators || ''

export const getChairmanMethodologicalCommission = (state: StateSchema) =>
  state.olympDetailsPage?.data?.official_information?.olymp_chairman_methodological_commission || ''

export const getChairmanOrganizingCommittee = (state: StateSchema) =>
  state.olympDetailsPage?.data?.official_information?.olymp_сhairman_organizing_committee || ''

export const getStages = (state: StateSchema) => state.olympDetailsPage?.data?.official_information?.olymp_stages || ''

export const getDatesVenuesFinalStage = (state: StateSchema) =>
  state.olympDetailsPage?.data?.official_information?.olymp_dates_venues_final_stage || ''
