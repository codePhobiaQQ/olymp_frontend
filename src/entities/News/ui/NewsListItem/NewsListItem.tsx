import cn from 'classnames'
import cls from './NewsListItem.module.scss'
import { NewsView } from './../../model/consts/newsConsts'

type NewsListItemProps = {
  className?: string;
};

export const NewsListItem = (props: NewsListItemProps) => {
  const { className } = props

  return (
    <div className={cn(className, cls.NewsListItem)}>
      news item
    </div>
  )
}

export const NewsListItemSkeleton = ({ view }: { view: NewsView }) => {
  return <div>skeleton</div>
}