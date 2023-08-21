import { NewsType } from './../consts/newsConsts'

export interface News {
  id: string;
  news_title?: string;
  news_description?: string;
  news_preview_image?: string;
  post_date: string;
  post_modified: string;
  post_author: string;
  type?: number[]
}

export interface NewsCategories {
  id: number;
  name: string;
  parent: string;
}
