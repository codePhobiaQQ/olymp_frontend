import cls from './NewsList.module.scss'
import cn from 'classnames'
import { NewsView } from './../../model/consts/newsConsts'
import { News } from './../../model/types/news'
import { NewsListItem, NewsListItemSkeleton } from './../../ui/NewsListItem/NewsListItem'
import Text from '@shared/ui/Text/Text'

type NewsListProps = {
  className?: string;
  isLoading?: boolean;
  view?: NewsView
  news: News[]
};

const getSkeletons = (view: NewsView) => {
  new Array(view === NewsView.SMALL ? 9 : 3).fill(null).map((_, index) =>
    <NewsListItemSkeleton key={index} view={view} />,
  )
}

export const NewsList = (props: NewsListProps) => {
  const { className, news, view = NewsView.SMALL, isLoading = false } = props

  if (!isLoading && news.length === 0) {
    return <div className={cn(cls.NewsList, cls[view], className)}>
      <Text text='Новости пока отсутствуют...' />
    </div>
  }

  return (
    <div className={cn(className, cls.NewsList, cls[view])}>
      {news.map((newsItem, index) => (
        <div key={newsItem.id}>
          <NewsListItem view={view} news={newsItem} key={newsItem.id} />
          {isLoading && getSkeletons(view)}
        </div>
      ))}
    </div>
  )
}