import { NewsCategory } from '@entities/News'

export interface NewsCategoriesSchema {
  isLoading: boolean
  error?: string
  categories: NewsCategory[]
  selectedCategories: NewsCategory['id'][]
}
