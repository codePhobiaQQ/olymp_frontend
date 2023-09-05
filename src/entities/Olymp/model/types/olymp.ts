export interface OlympI {
  id: number | string
  name: string
}

export enum OlympNames {
  'NEWS' = 'Новости',
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

  about_olymp?: string
}

// export enum OlympIdsList {
//   '233' = OlympNames[''],
// }
