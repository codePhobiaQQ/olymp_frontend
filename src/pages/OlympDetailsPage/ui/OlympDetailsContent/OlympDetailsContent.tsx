import cn from 'classnames'
import cls from './OlympDetailsContent.module.scss'

type OlympDetailsContentProps = {
  className?: string
}

export const OlympDetailsContent = (props: OlympDetailsContentProps) => {
  const { className = '' } = props

  return <div className={cn(className, cls.OlympDetailsContent)}></div>
}
