import { EntityState } from '@reduxjs/toolkit'
import { News, NewsView } from '@entities/News'

export type OrderFilterType = 'ASC' | 'DESC'
export type CategoriesFilterType = number[]

export interface NewsPageSchema extends EntityState<News> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  view: NewsView;

  categories: CategoriesFilterType;
  order?: OrderFilterType

  _inited: boolean;
}

