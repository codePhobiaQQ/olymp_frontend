import cn from 'classnames'
import cls from './NewsListItem.module.scss'
import { News, NewsCategory, NewsView } from '@entities/News'
import Text, { TextTheme } from '@shared/ui/Text/Text'
import { normalizeDate } from '@shared/lib/utils/normalizeDate/normalizeDate'
import Title, { TitleTheme } from '@shared/ui/Title/Title'
import { limitText } from '@shared/lib/utils/limitText/limitText'
import AppImage from '@shared/ui/AppImage/AppImage'

import { getCategories } from '@features/fetchNewsCategories/model/selector/newsCategoriesSelectors'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'

type NewsListItemProps = {
  className?: string;
  view?: NewsView;
  news: News
};

export const NewsListItem = (props: NewsListItemProps) => {
  const { className, news, view = NewsView.SMALL } = props
  const categories = useSelector(getCategories)

  const newsCategories: NewsCategory[] = useMemo(() => {
    const result: NewsCategory[] = []
    for (const newsCategoryId of news.categories) {
      const matchCategory = categories.filter(fetchedCategory => fetchedCategory.id === newsCategoryId)[0]
      if (matchCategory) {
        result.push(matchCategory)
      }
    }
    return result
  }, [categories, news])

  return (
    <div className={cn(className, cls.NewsListItem, cls[view], { [cls.NewsBig]: news?.news_preview_image })}>
      {news?.news_preview_image && <AppImage wrapperClassName={cls.NewsPreviewImage} src={news.news_preview_image} />}

      <div className={cn(cls.Header)}>
        <Text className={cls.Date} text={normalizeDate(news.post_date)} />
        <div className={cls.Categories}>
          {newsCategories?.map(category => <Text className={cls.CategoryItem} key={category.id} text={category.name} />)}
        </div>

      </div>
      <div className={cn(cls.Content)}>
        <Title theme={TitleTheme.H3} className={cls.Title} text={news.news_title} />
        <Text className={cls.ContentText} text={limitText(news?.news_description, 150)}
              theme={TextTheme.PARAGRAPH_THEME} />
      </div>
    </div>
  )
}