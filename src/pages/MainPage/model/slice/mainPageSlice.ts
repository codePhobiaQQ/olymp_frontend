import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchMainPageData } from '@pages/MainPage/model/services/fetchMainPageData'
import { FetchMainPageDataI, MainPageSchema } from '@pages/MainPage/model/types/mainPageSchema'

const initialState: MainPageSchema = {
  pageData: undefined,
  isLoading: false,
  error: undefined,
}

const MainPageSlice = createSlice({
  name: 'MainPageSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMainPageData.pending, (state: MainPageSchema) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchMainPageData.fulfilled, (state: MainPageSchema, { payload }: PayloadAction<FetchMainPageDataI>) => {
        state.isLoading = false
        state.error = undefined
        state.pageData = payload
      })
      .addCase(fetchMainPageData.rejected, (state: MainPageSchema, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const { actions: MainPageActions } = MainPageSlice
export const { reducer: MainPageReducer } = MainPageSlice
