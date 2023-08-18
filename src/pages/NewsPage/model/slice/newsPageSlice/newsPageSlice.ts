import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { NewsPageSchema } from './../../types/newsPageSchema';
import { News, NewsView } from '@entities/News'

const newsAdapter = createEntityAdapter<News>({
  selectId: (news) => news.id
})

export const newsPageSlice = createSlice({
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
    limit: 9,
  }),

  reducers: {
    increment: (state) => {
    },
  },
  extraReducers: (builder) => {
  // builder.addCase(saveJsonSettings.fulfilled, (state, { payload }: PayloadAction<JsonSettings>) => {
  // }
  }
})

// Action creators are generated for each case reducer function
export const { actions: newsPageActions } = newsPageSlice;
export const { reducer: newsPageReducer } = newsPageSlice