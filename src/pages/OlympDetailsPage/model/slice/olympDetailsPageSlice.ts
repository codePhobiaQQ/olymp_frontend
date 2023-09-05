import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchOlympsDetails } from '@pages/OlympDetailsPage/model/services/fetchOlympDetails.ts'
import { OlympSchema } from '@entities/Olymp'
import { OlympDetailsSchema } from './..//types/olympsDetails.ts'

const initialState: OlympDetailsSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
}

const OlympDetailsPageSlice = createSlice({
  name: 'OlympDetailsPageSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOlympsDetails.pending, (state) => {
        state.isLoading = false
        state.error = undefined
      })
      .addCase(fetchOlympsDetails.fulfilled, (state, { payload }: PayloadAction<OlympSchema>) => {
        state.isLoading = false
        state.error = undefined
        state.data = payload
      })
      .addCase(fetchOlympsDetails.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: OlympDetailsPageActions } = OlympDetailsPageSlice
export const { reducer: OlympDetailsPageReducer } = OlympDetailsPageSlice
