import { NewsCategories } from '@entities/News'

export interface NewsCategoriesSchema {
  isLoading: boolean
  error?: string
  categories: NewsCategories[]
}