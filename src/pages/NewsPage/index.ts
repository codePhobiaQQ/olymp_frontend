export type { NewsPageSchema } from './model/types/newsPageSchema'
export { NewsPageAsync as NewsPage } from './ui/NewsPage/NewsPage.async'

import {newsPageReducer, newsPageActions} from '@pages/NewsPage/model/slice/newsPageSlice/newsPageSlice'