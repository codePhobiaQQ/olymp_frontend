import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@app/providers/store';
import { getNewsPageInited } from '@pages/NewsPage/model/selectors/newsPageSelectors'
import { CategoriesFilterType, OrderFilterType } from '@pages/NewsPage/model/types/newsPageSchema'
import { newsPageActions } from '@pages/NewsPage/model/slice/newsPageSlice/newsPageSlice'
import { fetchNewsList } from '@pages/NewsPage/model/services/fetchNewsList/fetchNewsList'

export const initNewsPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('newsPage/initNewsPage', async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getNewsPageInited(getState());

    if (!inited) {
        const orderFromUrl = searchParams.get('order') as OrderFilterType;
        const typeFromUrl = searchParams.get('type') as CategoriesFilterType;

        if (orderFromUrl) {
          dispatch(newsPageActions.setOrderFilter(orderFromUrl))
        }

        if (typeFromUrl) {
            dispatch(newsPageActions.setTypeFilter(typeFromUrl))
        }

        dispatch(newsPageActions.initState());
        dispatch(fetchNewsList({}));
    }
});
