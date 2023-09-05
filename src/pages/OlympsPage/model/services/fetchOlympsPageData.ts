import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@app/providers/storeProvider'
import { FetchOlympsPageData } from '@pages/OlympsPage/model/types/olymps.ts'

export const fetchOlympsPageData = createAsyncThunk<FetchOlympsPageData, undefined, ThunkConfig<string>>(
  'olymps/fetchOlympsData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi
    try {
      const response = await extra.api.get<FetchOlympsPageData>(`/custom/v2/olymps`)
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
