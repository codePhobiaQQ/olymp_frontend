import Title, { TitleTheme } from '@shared/ui/Titles/Title'
import cls from './PageTitle.module.css'
import cn from 'classnames'

interface PageTitleI {
  className?: string
  text?: string
}

const PageTitle = (props: PageTitleI) => {
  const { className = '', text } = props

  return <Title text={text ? text : 'Страница'} theme={TitleTheme.H2} className={cn(className, cls.PageTitle)} />
}

export default PageTitle
