import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NewsCategoriesSchema } from '@features/fetchNewsCategories/model/types/newsCategoriesSchema'
import { fetchNewsCategories } from '@features/fetchNewsCategories/model/services/fetchNewsCategories'
import { NewsCategories } from '@entities/News'
import { StateSchema } from '@app/providers/storeProvider'

const initialState: NewsCategoriesSchema = {
  isLoading: false,
  error: '',
  categories: [],
}

const NewsCategoriesSlice = createSlice({
  name: 'NewsCategoriesSlice',
  initialState,

  reducers: {
    increment: (state) => {
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchNewsCategories.fulfilled, (state: NewsCategoriesSchema, { payload }: PayloadAction<NewsCategories[]>) => {
    //   state.categories = payload;
    // }).addCase(fetchNewsCategories.pending, (state: NewsCategoriesSchema) => {
    //   state.isLoading = true;
    // }).addCase(fetchNewsCategories.pending, (state: NewsCategoriesSchema, { payload }: PayloadAction) => {
    //   state.error = payload;
    //   state.isLoading = false
    // })
  },
})

// Action creators are generated for each case reducer function
export const { actions: NewsCategoriesActions } = NewsCategoriesSlice
export const { reducer: NewsCategoriesReducer } = NewsCategoriesSlice