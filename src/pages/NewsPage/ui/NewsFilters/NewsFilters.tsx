import cn from 'classnames'
import cls from './NewsFilters.module.scss'
import { Select } from '@shared/ui/Select/Select'
import Text from '@shared/ui/Text/Text'
import { useNewsPageFilters } from '@pages/NewsPage/lib/hooks/useNewsPageFilters'
import { OrderFilterType } from '@pages/NewsPage/model/types/newsPageSchema'
import { useSelector } from 'react-redux'
import { getNewsPageView } from '@pages/NewsPage/model/selectors/newsPageSelectors'
import { useCallback } from 'react'
import { NewsView } from '@entities/News'

type NewsFiltersProps = {
  className?: string;
};

export const NewsFilters = (props: NewsFiltersProps) => {
  const { className } = props

  return (
    <div className={cn(className, cls.NewsFilters)}>
      <Text text='Вид:' />
      <ViewFilter />

      <Text text='Порядок:' />
      <OrderFilterSelect />
    </div>
  )
}

// -------------------
// --- ViewFilter ----
// -------------------

const ViewFilter = () => {
  const view = useSelector(getNewsPageView)
  const { onChangeView } = useNewsPageFilters()

  const changeViewHandler = useCallback((view: NewsView) => {
    return () => onChangeView(view)
  }, [onChangeView])

  return <div className={cls.ViewFilterWrapper}>
    <div className={cn(cls.ViewFilterItem, cls.Small)}>
      <div onClick={changeViewHandler(NewsView.SMALL)}>
        small
      </div>
    </div>
    <div className={cn(cls.ViewFilterItem, cls.Big)}>
      <div onClick={changeViewHandler(NewsView.BIG)}>
        big
      </div>
    </div>
  </div>
}

// -------------------
// --- OrderFilter ---
// -------------------
type orderFilterOptionType = {
  id: OrderFilterType,
  name: string
}
const orderFilterOptions: orderFilterOptionType[] = [
  {
    id: 'ASC',
    name: 'сначала новые',
  },
  {
    id: 'DESC',
    name: 'сначала старые',
  },
]
const OrderFilterSelect = () => {
  const { onChangeOrder } = useNewsPageFilters()

  const changeHandler = (order: OrderFilterType) => {
    onChangeOrder(order)
  }

  return <Select
    options={orderFilterOptions}
    onChange={changeHandler}
  />
}