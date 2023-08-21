import { EntityState } from '@reduxjs/toolkit'
import { News, NewsType, NewsView } from '@entities/News'

export interface NewsPageSchema extends EntityState<News> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  view: NewsView;
  type: NewsType;

  _inited: boolean;
}
