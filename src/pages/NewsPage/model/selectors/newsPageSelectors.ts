import { StateSchema } from '@app/providers/storeProvider'
import { NewsType, NewsView } from '@entities/News'
import { buildSelector } from '@shared/store'

export const getNewsPageIsLoading = (state: StateSchema) => state.newsPage?.isLoading || false
export const getNewsPageIsError = (state: StateSchema) => state.newsPage?.error
export const getNewsPageType = (state: StateSchema) => state.newsPage?.type || NewsType.ALL
export const getNewsPageIsView = (state: StateSchema) => state.newsPage?.view || NewsView.SMALL
export const getNewsPageNum = (state: StateSchema) => state.newsPage?.page || 1
export const getNewsPageLimit = (state: StateSchema) => state.newsPage?.limit || 5
export const getNewsPageHasMore = (state: StateSchema) => state.newsPage?.hasMore || false

export const [useNewsItemById] = buildSelector((state, id: string) => {
  state.newsPage?.entities[id]
})