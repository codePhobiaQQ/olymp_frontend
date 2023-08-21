import cn from 'classnames'
import cls from './NewsListItem.module.scss'
import { NewsView } from './../../model/consts/newsConsts'
import { News } from '@entities/News'
import Text, { TextTheme } from '@shared/ui/Text/Text'
import { normalizeDate } from '@shared/lib/utils/normalizeDate/normalizeDate'
import Title from '@shared/ui/Title/Title'
import { limitText } from '@shared/lib/utils/limitText/limitText'

type NewsListItemProps = {
  className?: string;
  news: News
  view?: NewsView
};

export const NewsListItem = (props: NewsListItemProps) => {
  const { className, news, view } = props

  return (
    <div className={cn(className, cls.NewsListItem)}>
      <div className={cn(cls.Header)}>
        <Text text={normalizeDate(news.post_date)} />
      </div>
      <div className={cn(cls.Content)}>
        <Title text={news.news_title} />
        <Text text={limitText(news?.news_description, 150)} theme={TextTheme.PARAGRAPH_THEME} />
      </div>
    </div>
  )
}

export const NewsListItemSkeleton = ({ view }: { view: NewsView }) => {
  return <div>skeleton</div>
}