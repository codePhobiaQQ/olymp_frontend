import PageHoc from '@shared/layouts/PageHoc/PageHoc'
import cls from './OlympsPage.module.css'
import cn from 'classnames'

export const OlympsPage = () => {
  return (
    <PageHoc>
      <div className={cn(cls.OlympsPage)}></div>
    </PageHoc>
  )
}
