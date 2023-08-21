import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
  getNewsPageHasMore,
  getNewsPageNum,
  getNewsPageIsLoading
} from '../../selectors/newsPageSelectors';
import { newsPageActions } from '@pages/NewsPage/model/slice/newsPageSlice/newsPageSlice'
import { fetchNewsList } from '@pages/NewsPage/model/services/fetchNewsList/fetchNewsList'

export const fetchNextNewsPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
  >('newsPage/fetchNextNewsPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;

  const hasMore = getNewsPageHasMore(getState());
  const page = getNewsPageNum(getState());
  const isLoading = getNewsPageIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(newsPageActions.setPage(page + 1));
    dispatch(fetchNewsList({}));
  }
});
