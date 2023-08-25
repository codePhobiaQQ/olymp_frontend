import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@app/providers/storeProvider';
import { NewsCategory } from '@entities/News';

export const fetchNewsCategories = createAsyncThunk<
  NewsCategory[],
  undefined,
  ThunkConfig<string>
  >('newsPage/fetchNewsCategories', async (props, thunkApi) => {

  const { extra, rejectWithValue, getState } = thunkApi;

  try {
    const response = await extra.api.get<NewsCategory[]>('/custom/v2/news/categories');
    if (!response.data) {
      throw new Error();
    }

    console.log(response)

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
