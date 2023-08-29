import cn from 'classnames'
import cls from './NewsFilters.module.scss'
import { Select } from '@shared/ui/Select/Select'
import Text from '@shared/ui/Text/Text'
import { useNewsPageFilters } from '@pages/NewsPage/lib/hooks/useNewsPageFilters'
import { OrderFilterType } from '@pages/NewsPage/model/types/newsPageSchema'

type NewsFiltersProps = {
  className?: string;
};

export const NewsFilters = (props: NewsFiltersProps) => {
  const { className } = props

  return (
    <div className={cn(className, cls.NewsFilters)}>
      <Text text='Порядок:' />
      <OrderFilterSelect />
    </div>
  )
}

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