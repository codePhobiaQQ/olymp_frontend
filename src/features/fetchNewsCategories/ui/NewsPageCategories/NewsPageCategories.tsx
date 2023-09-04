import cn from 'classnames'
import cls from './NewsPageCategories.module.scss'
import { getCategories, getError, getIsLoading } from './../../model/selector/newsCategoriesSelectors'
import { useSelector } from 'react-redux'
import Text from '@shared/ui/Text/Text'
import { useCallback, useEffect } from 'react'
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchNewsCategories } from '@features/fetchNewsCategories/model/services/fetchNewsCategories'
import { NewsCategory } from '@entities/News'

type NewsPageCategoriesProps = {
  className?: string
  onClickCategory?: (categoryId: NewsCategory['id']) => void
  selectedCategories?: NewsCategory['id'][]
}

export const NewsPageCategories = (props: NewsPageCategoriesProps) => {
  const dispatch = useAppDispatch()
  const { className, onClickCategory, selectedCategories } = props

  useEffect(() => {
    dispatch(fetchNewsCategories())
  }, [])

  const categories = useSelector(getCategories)
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)

  const clickCategoryHandler = (categoryId: NewsCategory['id']) => {
    return () => onClickCategory?.(categoryId)
  }

  const isSelectCategoryHandler = useCallback(
    (category: NewsCategory): boolean => {
      if (!selectedCategories?.length) return false
      if (selectedCategories?.indexOf(category.id) !== -1) return true
      return false
    },
    [selectedCategories]
  )

  if (!isLoading && error) {
    return 'Error...'
  }

  if (isLoading) {
    return <Text text={'Загрузка...'} />
  }

  return (
    <div className={cn(className, cls.NewsPageCategories)}>
      {categories?.length > 0 ? (
        categories?.map((category) => (
          <div className={cls.NewsPageCategoryItem} key={category.id} onClick={clickCategoryHandler(category.id)}>
            {isSelectCategoryHandler(category) ? 'on' + ' ' : 'off' + ' '}
            {category.name}
          </div>
        ))
      ) : (
        <Text className={cls.NewsPageCategoryItem} text={'Категории пока не добавлены'} />
      )}
    </div>
  )
}
