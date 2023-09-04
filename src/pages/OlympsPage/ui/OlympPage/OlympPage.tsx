import cn from 'classnames'
import cls from './OlympPage.module.scss'

type OlympPageProps = {
  className?: string
}

export const OlympPage = (props: OlympPageProps) => {
  const { className = '' } = props

  return <div className={cn(className, cls.OlympPage)}>olymp page</div>
}
