import { createSlice } from '@reduxjs/toolkit'
import { NewsCategoriesSchema } from '@features/fetchNewsCategories/model/types/newsCategoriesSchema'
import { fetchNewsCategories } from '@features/fetchNewsCategories/model/services/fetchNewsCategories'

const initialState: NewsCategoriesSchema = {
  isLoading: false,
  error: '',
  categories: [],
  selectedCategories: [],
}

const NewsCategoriesSlice = createSlice({
  name: 'NewsCategoriesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsCategories.pending, (state: NewsCategoriesSchema, _) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchNewsCategories.fulfilled, (state: NewsCategoriesSchema, action) => {
        state.isLoading = false
        state.categories = action.payload
      })
      .addCase(fetchNewsCategories.rejected, (state: NewsCategoriesSchema, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const { actions: NewsCategoriesActions } = NewsCategoriesSlice
export const { reducer: NewsCategoriesReducer } = NewsCategoriesSlice
