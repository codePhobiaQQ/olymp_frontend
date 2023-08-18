import { NewsType } from './../consts/newsConsts'

export interface News {
  id: string;
  title: string;
  subtitle: string;
  createdAt: string;
  type: NewsType[]
}