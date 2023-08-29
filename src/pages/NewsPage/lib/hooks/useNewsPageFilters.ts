import { useDispatch, useSelector } from 'react-redux'
import { getNewsPageSortOrder } from './../../model/selectors/newsPageSelectors'
import { useCallback } from 'react'
import { OrderFilterType } from './../../model/types/newsPageSchema'
import { newsPageActions } from './../../model/slice/newsPageSlice/newsPageSlice'
import { fetchNewsList } from '@pages/NewsPage/model/services/fetchNewsList/fetchNewsList'
import { NewsView } from '@entities/News'

export function useNewsPageFilters() {
  const order = useSelector(getNewsPageSortOrder)
  const dispatch = useDispatch()

  const fetchData = useCallback(() => {
    dispatch(fetchNewsList({ replace: true }));
  }, [])

  const onChangeView = useCallback((newView: NewsView) => {
    dispatch(newsPageActions.setView(newView))
  }, [dispatch])

  const onChangeOrder = useCallback((newOrder: OrderFilterType) => {
    dispatch(newsPageActions.setOrderFilter(newOrder))
    dispatch(newsPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  return {
    onChangeOrder,
    onChangeView
  }
}