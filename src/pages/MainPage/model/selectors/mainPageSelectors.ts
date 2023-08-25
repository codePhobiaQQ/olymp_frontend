import { StateSchema } from '@app/providers/storeProvider'

export const getIsLoading = (state: StateSchema) => state.mainPage?.isLoading || false;
export const getError = (state: StateSchema) => state.mainPage?.error || '';

export const getMainPageSubtitle = (state: StateSchema) => state.mainPage?.pageData?.mainscreen_subtitle || "";

export const getMainPageCard1Title = (state: StateSchema) => state.mainPage?.pageData?.mainscreen_card1_title || "";
export const getMainPageCard1Olymp1Name = (state: StateSchema) => state.mainPage?.pageData?.mainscreen_card1_olymp1_name || "";
export const getMainPageCard1Olymp1Link = (state: StateSchema) => state.mainPage?.pageData?.mainscreen_card1_olymp1_link || "";