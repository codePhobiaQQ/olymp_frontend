import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit'
import { NewsPageSchema } from './../../types/newsPageSchema'
import { News, NewsType, NewsView } from '@entities/News'
import { fetchNewsList } from '@pages/NewsPage/model/services/fetchNewsList/fetchNewsList'
import { NEWS_VIEW_LOCALSTORAGE_KEY } from '@shared/vars/localstorage/localstorage'
import { StateSchema } from '@app/providers/storeProvider'

const newsAdapter = createEntityAdapter<News>({
  selectId: (news) => news.id,
})

export const getNews = newsAdapter.getSelectors<StateSchema>(state => state.newsPage || newsAdapter.getInitialState())

const newsPageSlice = createSlice({
  name: 'newsPageSlice',

  initialState: newsAdapter.getInitialState<NewsPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: NewsView.SMALL,
    page: 1,
    hasMore: true,
    _inited: false,
    limit: 5,
    type: NewsType.ALL
  }),

  reducers: {
    setView: (state: NewsPageSchema, action: PayloadAction<NewsView>) => {
      state.view = action.payload
      localStorage.setItem(
        NEWS_VIEW_LOCALSTORAGE_KEY,
        action.payload,
      )
    },
    setPage: (state: NewsPageSchema, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setType: (state: NewsPageSchema, action: PayloadAction<NewsType>) => {
      state.type = action.payload;
    },
    initState: (state: NewsPageSchema) => {
      const view = localStorage.getItem(
        NEWS_VIEW_LOCALSTORAGE_KEY,
      ) as NewsView;
      state.view = view;
      state.limit = view === NewsView.BIG ? 4 : 9;
      state._inited = true;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsList.pending, (state: NewsPageSchema, action) => {
        state.error = undefined
        state.isLoading = true

        if (action.meta.arg.replace) {
          newsAdapter.removeAll(state)
        }
      })
      .addCase(fetchNewsList.fulfilled, (state: NewsPageSchema, action) => {
        state.isLoading = false
        state.hasMore = action.payload.length >= state.limit

        if (action.meta.arg.replace) {
          newsAdapter.setAll(state, action.payload)
        } else {
          newsAdapter.addMany(state, action.payload)
        }
      })
      .addCase(fetchNewsList.rejected, (state: NewsPageSchema, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const { actions: newsPageActions, reducer: newsPageReducer } = newsPageSlice