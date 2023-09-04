import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { OrderFilterType } from './../../model/types/newsPageSchema'
import { newsPageActions } from './../../model/slice/newsPageSlice/newsPageSlice'
import { fetchNewsList } from '@pages/NewsPage/model/services/fetchNewsList/fetchNewsList'
import { NewsCategory, NewsView } from '@entities/News'

export function useNewsPageFilters() {
  const dispatch = useDispatch()
  const { toggleCategory } = newsPageActions

  const fetchData = useCallback(() => {
    // @ts-ignore
    dispatch(fetchNewsList({ replace: true }))
  }, [])

  const onChangeView = useCallback(
    (newView: NewsView) => {
      dispatch(newsPageActions.setView(newView))
    },
    [dispatch]
  )

  const onChangeOrder = useCallback(
    (newOrder: OrderFilterType) => {
      dispatch(newsPageActions.setOrderFilter(newOrder))
      dispatch(newsPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData]
  )

  const onChangeCategory = useCallback(
    (categoryId: NewsCategory['id']) => {
      dispatch(newsPageActions.setPage(1))
      dispatch(toggleCategory(categoryId))
      fetchData()
    },
    [dispatch]
  )

  return {
    onChangeOrder,
    onChangeView,
    onChangeCategory,
  }
}
