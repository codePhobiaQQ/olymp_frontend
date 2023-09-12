export interface OlympI {
  id: number | string
  name: string
}

export interface OlympSchema {
  olymp_id: number
  olymp_preview_image?: string
  olymp_name?: string
  olymp_link?: string
  olymp_level?: string

  official_information?: {
    olymp_full_name?: string
    olymp_organisators?: string
    olymp_сhairman_organizing_committee?: string
    olymp_chairman_methodological_commission?: string
    olymp_stages?: string
    olymp_dates_venues_final_stage?: string
  }

  news?: number[]

  about_olymp?: string
}
