import cn from 'classnames'
import cls from './NewsInfiniteList.module.scss'
import { useSelector } from 'react-redux'
import { NewsList } from '@entities/News'
import { getNews } from '@pages/NewsPage/model/slice/newsPageSlice/newsPageSlice'
import {
  getNewsPageIsError,
  getNewsPageIsLoading,
  getNewsPageIsView,
} from '@pages/NewsPage/model/selectors/newsPageSelectors'
import Text from '@shared/ui/Text/Text'

type NewsPageInfiniteListProps = {
  className?: string;
};

export const NewsInfiniteList = (props: NewsPageInfiniteListProps) => {
  const { className } = props
  const news = useSelector(getNews.selectAll)
  const view = useSelector(getNewsPageIsView)
  const isLoading = useSelector(getNewsPageIsLoading)
  const error = useSelector(getNewsPageIsError)

  if (error) {
    return <Text text={'Во время загрузки новостей произошла ошибка'} />
  }

  return (
    <div className={cn(className, cls.NewsInfiniteList)}>
      <NewsList isLoading={isLoading} view={view} news={news} />
    </div>
  )
}