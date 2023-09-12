import cn from 'classnames'
import cls from './AboutOlymp.module.scss'
import { useSelector } from 'react-redux'
import { getAboutOlymps } from '@pages/OlympDetailsPage/model/selectors/olympDetailsSelectors.ts'

type AboutOlympProps = {
  className?: string
}

export const AboutOlymp = (props: AboutOlympProps) => {
  const { className = '' } = props
  const aboutOlympData = useSelector(getAboutOlymps)

  return <div className={cn(className, cls.AboutOlymp)}>{aboutOlympData}</div>
}
