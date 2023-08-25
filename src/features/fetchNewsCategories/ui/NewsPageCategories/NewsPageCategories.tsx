import cn from 'classnames'
import cls from './NewsPageCategories.module.scss'
import { getCategories, getError, getIsLoading } from './../../model/selector/newsCategoriesSelectors'
import { useSelector } from 'react-redux'
import Text from '@shared/ui/Text/Text'
import { useEffect } from 'react'
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchNewsCategories } from '@features/fetchNewsCategories/model/services/fetchNewsCategories'

type NewsPageCategoriesProps = {
  className?: string;
};

export const NewsPageCategories = (props: NewsPageCategoriesProps) => {
  const dispatch = useAppDispatch()
  const { className } = props

  useEffect(() => {
    dispatch(fetchNewsCategories())
  }, [])

  const categories = useSelector(getCategories)
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)

  if (!isLoading && error) {
    return 'Error...'
  }

  if (isLoading) {
    return <Text text={'Загрузка...'} />
  }

  return (
    <div className={cn(className, cls.NewsPageCategories)}>
      {categories?.length > 0 ? categories?.map(category =>
        <div
          className={cls.NewsPageCategoryItem}
          key={category.id}
        >
          {category.name}
        </div>,
      ) :  <Text className={cls.NewsPageCategoryItem} text={'Категории пока не добавлены'} />}
    </div>
  )
}