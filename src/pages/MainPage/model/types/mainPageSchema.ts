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
  aboutscreen_title: string
  aboutscreen_description: string

  // ---------- Секция представления ---------
  presentation_screen_number1: string
  presentation_screen_number2: string
  presentation_screen_text1: string
  presentation_screen_text2: string
  presentation_screen_button_text_1: string
  presentation_screen_button_text_2: string
  presentation_screen_button_link_1: string
  presentation_screen_button_link_2: string

  // ---------- Секция призыва к действию ---------
  participate_screen_description: string
  participate_screen_image: string
}