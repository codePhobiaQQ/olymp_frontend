import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@app/providers/storeProvider';
import { NewsCategories } from '@entities/News';

export const fetchNewsCategories = createAsyncThunk<
  NewsCategories[],
  undefined,
  ThunkConfig<string>
  >('newsPage/fetchNewsCategories', async (props, thunkApi) => {

  const { extra, rejectWithValue, getState } = thunkApi;

  try {
    const response = await extra.api.get<NewsCategories[]>('/custom/v2/news/categories');
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
