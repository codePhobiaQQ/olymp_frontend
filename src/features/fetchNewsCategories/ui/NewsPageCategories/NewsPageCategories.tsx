import cn from 'classnames'
import cls from './NewsPageCategories.module.scss'
import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { NewsCategoriesReducer } from './../../model/slice/newsCategoriesSlice'
import { getCategories, getError, getIsLoading } from './../../model/selector/newsCategoriesSelectors'
import { useSelector } from 'react-redux'
import Text from '@shared/ui/Text/Text'
import { useEffect } from 'react'
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchNewsCategories } from '@features/fetchNewsCategories/model/services/fetchNewsCategories'

type NewsPageCategoriesProps = {
  className?: string;
};

const reducerList = {
  newsCategories: NewsCategoriesReducer,
}

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
    return 'Loading...'
  }

  return (
    <DynamicModuleLoader removeAfterUnmount={false} reducers={reducerList}>
      {categories?.length > 0
        ? <div className={cn(className, cls.NewsPageCategories)}>
          {categories.map(category =>
            <div className={cls.NewsPageCategoryItem}
                 key={category.id}>{category.name}
            </div>,
          )}
        </div>
        : <Text text={'Категории пока не добавлены'} />}
    </DynamicModuleLoader>
  )
}