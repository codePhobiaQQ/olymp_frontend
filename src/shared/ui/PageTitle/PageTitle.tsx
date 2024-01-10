import { Title } from '@shared/ui/titles'
import cls from './PageTitle.module.css'
import cn from 'classnames'

interface PageTitleI {
  className?: string
  text?: string
}

const PageTitle = (props: PageTitleI) => {
  const { className = '', text } = props

  return <Title text={text ? text : 'Страница'} tag='h2' className={cn(className, cls.PageTitle)} />
}

export default PageTitle
