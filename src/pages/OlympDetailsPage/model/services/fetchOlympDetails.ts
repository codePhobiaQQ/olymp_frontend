import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@app/providers/storeProvider'
import { OlympSchema } from '@entities/Olymp/model/types/olymp.ts'

export const fetchOlympsDetails = createAsyncThunk<OlympSchema, URLSearchParams, ThunkConfig<string>>(
  'olymps/fetchOlympDetails',
  async (olympLink, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi
    try {
      const response = await extra.api.get<OlympSchema>(`/custom/v2/olymps/${olympLink}`)
      if (!response.data) {
        throw new Error()
      }
      console.log(response.data)
      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
