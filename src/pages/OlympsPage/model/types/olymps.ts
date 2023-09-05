import { OlympSchema } from '@entities/Olymp/model/types/olymp.ts'

export type OlympPreviewDataI = Pick<OlympSchema, 'olymp_id' & 'olymp_link' & 'olymp_name' & 'olymp_preview_image'>

export type FetchOlympsPageData = OlympPreviewDataI[]

export interface OlympsPageSchema {
  olympsData?: FetchOlympsPageData
  error?: string
  isLoading: boolean
}
