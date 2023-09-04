import { StateSchema } from '@app/providers/storeProvider'
import { NewsView } from '@entities/News'
import { buildSelector } from '@shared/store'

export const getNewsPageIsLoading = (state: StateSchema) => state.newsPage?.isLoading || false
export const getNewsPageIsError = (state: StateSchema) => state.newsPage?.error

export const getSelectedCategories = (state: StateSchema) => state.newsPage?.selectedCategories || []

export const getNewsPageType = (state: StateSchema) => state.newsPage?.selectedCategories || []
export const getNewsPageView = (state: StateSchema) => state.newsPage?.view || NewsView.SMALL

export const getNewsPageNum = (state: StateSchema) => state.newsPage?.page || 0
export const getNewsPageLimit = (state: StateSchema) => state.newsPage?.limit || 5
export const getNewsPageHasMore = (state: StateSchema) => state.newsPage?.hasMore || false

export const getNewsPageSortOrder = (state: StateSchema) => state.newsPage?.order || 'ASC'
export const getNewsPageInited = (state: StateSchema) => state.newsPage?._inited || false

export const [useNewsItemById] = buildSelector((state, id: string) => {
  state.newsPage?.entities[id]
})
