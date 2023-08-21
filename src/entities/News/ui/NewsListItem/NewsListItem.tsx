import cn from 'classnames'
import cls from './NewsListItem.module.scss'
import { News } from '@entities/News'
import Text, { TextTheme } from '@shared/ui/Text/Text'
import { normalizeDate } from '@shared/lib/utils/normalizeDate/normalizeDate'
import Title, { TitleTheme } from '@shared/ui/Title/Title'
import { limitText } from '@shared/lib/utils/limitText/limitText'
import AppImage from '@shared/ui/AppImage/AppImage'

type NewsListItemProps = {
  className?: string;
  news: News
};

export const NewsListItem = (props: NewsListItemProps) => {
  const { className, news } = props

  return (
    <div className={cn(className, cls.NewsListItem, { [cls.NewsLittle]: !news?.news_preview_image })}>
      {news?.news_preview_image && <AppImage wrapperClassName={cls.NewsPreviewImage} src={news.news_preview_image} />}

      <div className={cn(cls.Header)}>
        <Text className={cls.Date} text={normalizeDate(news.post_date)} />
      </div>
      <div className={cn(cls.Content)}>
        <Title theme={TitleTheme.H3} className={cls.Title} text={news.news_title} />
        <Text className={cls.ContentText} text={limitText(news?.news_description, 150)} theme={TextTheme.PARAGRAPH_THEME} />
      </div>
    </div>
  )
}