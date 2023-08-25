export interface MainPageSchema {
  pageData?: FetchMainPageDataI
  error?: string;
  isLoading: boolean
}

export interface FetchMainPageDataI {
  // ---------- Главная секция --------
  mainscreen_subtitle: string
  mainscreen_card1_title: string
  mainscreen_card1_olymp1_name: string
  mainscreen_card1_olymp1_link: string

  // ---------- Вторая секция ---------
}