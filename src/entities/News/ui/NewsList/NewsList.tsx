import cls from './NewsList.module.scss'
import cn from 'classnames'
import { NewsView } from './../../model/consts/newsConsts'
import { News } from './../../model/types/news'
import { NewsListItem } from './../../ui/NewsListItem/NewsListItem'
import Text from '@shared/ui/Text/Text'
import { Skeleton } from '@shared/ui/Skeleton'

type NewsListProps = {
  className?: string;
  isLoading?: boolean;
  view?: NewsView
  news: News[]
};

const getSkeletons = (view: NewsView) => {
  return <>
    {new Array(view === NewsView.SMALL ? 4 : 2).fill(null).map((_, index) =>
      <Skeleton key={index} height={150} width={'100%'} />
    )}
  </>
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
        <NewsListItem view={view} news={newsItem} key={newsItem.id} />
      ))}
      {isLoading && getSkeletons(view)}
    </div>
  )
}