import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NewsPageSchema, OrderFilterType } from './../../types/newsPageSchema'
import { News, NewsCategory, NewsView } from '@entities/News'
import { fetchNewsList } from '@pages/NewsPage/model/services/fetchNewsList/fetchNewsList'
import { NEWS_VIEW_LOCALSTORAGE_KEY } from '@shared/vars/localstorage/localstorage'
import { StateSchema } from '@app/providers/storeProvider'

const newsAdapter = createEntityAdapter<News>({
  selectId: (news) => news.id,
})
export const getNews = newsAdapter.getSelectors<StateSchema>((state) => state.newsPage || newsAdapter.getInitialState())

const newsPageSlice = createSlice({
  name: 'newsPageSlice',

  initialState: newsAdapter.getInitialState<NewsPageSchema>({
    isLoading: false,
    error: undefined,

    ids: [],
    entities: {},

    view: (localStorage.getItem(NEWS_VIEW_LOCALSTORAGE_KEY) as NewsView) || NewsView.SMALL,

    page: 0,
    hasMore: true,

    limit: 5,

    // --- Filters ---
    selectedCategories: [],
    order: 'ASC',
    // ---------------

    _inited: false,
  }),

  reducers: {
    setView: (state: NewsPageSchema, action: PayloadAction<NewsView>) => {
      state.view = action.payload
      localStorage.setItem(NEWS_VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    setPage: (state: NewsPageSchema, action: PayloadAction<number>) => {
      state.page = action.payload
    },

    setTypeFilter: (state: NewsPageSchema, action: PayloadAction<number[]>) => {
      state.selectedCategories = action.payload
    },

    setOrderFilter: (state: NewsPageSchema, action: PayloadAction<OrderFilterType>) => {
      state.order = action.payload
    },

    toggleCategory: (state, action: PayloadAction<NewsCategory['id']>) => {
      const _selectedCategories = [...state.selectedCategories]
      const categoryIndex = _selectedCategories.indexOf(action.payload)
      if (categoryIndex === -1) {
        state.selectedCategories = [..._selectedCategories, action.payload]
      } else {
        _selectedCategories.splice(categoryIndex, 1)
        state.selectedCategories = [..._selectedCategories]
      }
    },

    initState: (state: NewsPageSchema) => {
      const view = localStorage.getItem(NEWS_VIEW_LOCALSTORAGE_KEY) as NewsView
      state.view = view
      state.limit = view === NewsView.BIG ? 4 : 9
      state._inited = true
    },
  },

  extraReducers: (builder) => {
    builder
      // -----------------------
      // --- Fetch new list ---
      // -----------------------
      .addCase(fetchNewsList.pending, (state: NewsPageSchema, action) => {
        state.error = undefined
        state.isLoading = true

        if (action.meta.arg.replace) {
          newsAdapter.removeAll(state)
        }
      })
      .addCase(fetchNewsList.fulfilled, (state: NewsPageSchema, action) => {
        state.hasMore = action.payload.length >= state.limit
        if (action.meta.arg.replace) {
          newsAdapter.setAll(state, action.payload)
        } else {
          newsAdapter.addMany(state, action.payload)
        }
        state.isLoading = false
      })
      .addCase(fetchNewsList.rejected, (state: NewsPageSchema, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const { actions: newsPageActions, reducer: newsPageReducer } = newsPageSlice
