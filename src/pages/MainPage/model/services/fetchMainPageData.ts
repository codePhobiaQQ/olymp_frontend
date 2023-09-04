import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@app/providers/storeProvider'
import { MAIN_PAGE_ID } from '@pages/MainPage/model/data/mainPage'
import { FetchMainPageDataI } from '@pages/MainPage/model/types/mainPageSchema'

interface FetchMainPageData {
  acf: FetchMainPageDataI;
}

export const fetchMainPageData = createAsyncThunk<
  FetchMainPageDataI,
  undefined,
  ThunkConfig<string>>('profile/FetchMainPageData', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi
  try {
    const response = await extra.api.get<FetchMainPageData>(`/wp/v2/pages/${MAIN_PAGE_ID}?_fields=acf`)
    console.log("main page response", response)

    if (!response.data) {
      throw new Error()
    }
    console.log(response.data.acf)

    return response.data.acf
  } catch (e) {
    console.log(e)
    return rejectWithValue('error')
  }
})
