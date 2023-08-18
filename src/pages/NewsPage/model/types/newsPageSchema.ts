import { EntityState } from '@reduxjs/toolkit'
import { News, NewsView } from '@entities/News'

export interface NewsPageSchema extends EntityState<News> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  view: NewsView;

  _inited: boolean;
}
