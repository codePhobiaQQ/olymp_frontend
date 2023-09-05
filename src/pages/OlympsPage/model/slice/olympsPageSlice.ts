import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchOlympsPageData } from '@pages/OlympsPage/model/services/fetchOlympsPageData.ts'
import { FetchOlympsPageData, OlympsPageSchema } from '@pages/OlympsPage/model/types/olymps.ts'

const initialState: OlympsPageSchema = {
  olympsData: [],
  isLoading: false,
  error: undefined,
}

const OlympsPageSlice = createSlice({
  name: 'OlympsPageSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOlympsPageData.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchOlympsPageData.fulfilled, (state, { payload }: PayloadAction<FetchOlympsPageData>) => {
        state.isLoading = false
        state.error = undefined
        state.olympsData = payload
      })
      .addCase(fetchOlympsPageData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const { actions: OlympsPageActions } = OlympsPageSlice
export const { reducer: OlympsPageReducer } = OlympsPageSlice
