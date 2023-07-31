import PageHoc from '@/components/hoc/PageHoc/PageHoc'
import cls from './OlympsPage.module.css'
import cn from 'classnames'

const OlympsPage = () => {
	return (
		<PageHoc>
			<div className={cn(cls.OlympsPage)}></div>
		</PageHoc>
	)
}

export default OlympsPage
