import { StateSchema } from '@app/providers/storeProvider'

export const getIsLoading = (state: StateSchema) => state.mainPage?.isLoading || false;
export const getError = (state: StateSchema) => state.mainPage?.error || '';

export const getMainPageSubtitle = (state: StateSchema) => state.mainPage?.pageData?.mainscreen_subtitle || "";
export const getMainPageCard1Title = (state: StateSchema) => state.mainPage?.pageData?.mainscreen_card1_title || "";
export const getMainPageCard1Olymp1Name = (state: StateSchema) => state.mainPage?.pageData?.mainscreen_card1_olymp1_name || "";
export const getMainPageCard1Olymp1Link = (state: StateSchema) => state.mainPage?.pageData?.mainscreen_card1_olymp1_link || "";

export const getAboutScreenTitle = (state: StateSchema) => state.mainPage?.pageData?.aboutscreen?.aboutscreen_title || "";
export const getAboutScreenDescription = (state: StateSchema) => state.mainPage?.pageData?.aboutscreen?.aboutscreen_description || "";

export const getPresentationScreenNumb1 = (state: StateSchema) => state.mainPage?.pageData?.presentation_screen?.presentation_screen_number1 || 6;
export const getPresentationScreenNumb2 = (state: StateSchema) => state.mainPage?.pageData?.presentation_screen?.presentation_screen_number2 || 19;
export const getPresentationText1 = (state: StateSchema) => state.mainPage?.pageData?.presentation_screen?.presentation_screen_text1 || '';
export const getPresentationText2 = (state: StateSchema) => state.mainPage?.pageData?.presentation_screen?.presentation_screen_text2 || '';
export const getPresentationButtonText1 = (state: StateSchema) => state.mainPage?.pageData?.presentation_screen?.presentation_screen_button_text_1 || '';
export const getPresentationButtonText2 = (state: StateSchema) => state.mainPage?.pageData?.presentation_screen?.presentation_screen_button_text_2 || '';
export const getPresentationButtonLink1 = (state: StateSchema) => state.mainPage?.pageData?.presentation_screen?.presentation_screen_button_link_1 || '';
export const getPresentationButtonLink2 = (state: StateSchema) => state.mainPage?.pageData?.presentation_screen?.presentation_screen_button_link_2 || '';