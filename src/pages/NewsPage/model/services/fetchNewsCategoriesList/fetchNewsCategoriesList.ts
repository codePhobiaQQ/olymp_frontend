import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@app/providers/storeProvider';
import { News, NewsType } from '@entities/News';
import { addQueryParams } from '@shared/lib/url/addQueryParams'
import {
  getNewsPageLimit,
  getNewsPageNum, getNewsPageType,
} from './../../selectors/newsPageSelectors'

interface FetchNewsListProps {
  replace?: boolean;
}

export const fetchNewsCategoriesList = createAsyncThunk<
  News[],
  FetchNewsListProps,
  ThunkConfig<string>
  >('newsPage/fetchNewsList', async (props, thunkApi) => {

  const { extra, rejectWithValue, getState } = thunkApi;
  const limit = getNewsPageLimit(getState());
  const page = getNewsPageNum(getState());
  const type = getNewsPageType(getState());

  try {
    addQueryParams({
      type: type,
    });

    const response = await extra.api.get<News[]>('/custom/v2/news', {
      params: {
        // _expand: 'user',
        // _limit: limit,
        // _page: page,
        // type: type === NewsType.ALL ? undefined : type,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
