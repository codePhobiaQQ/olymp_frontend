import cls from './AboutScreen.module.css'
import cn from 'classnames'
import Typography from '@components/shared/ui/Typography/Typography'
import TitleWithText from '@/components/common/TitleWithText/TitleWithText'
import Button from '@/components/shared/ui/Button/Button'
import LightArrowSvg from '@/components/shared/assets/svg/LightArrowSvg'
import { RouteActionScreenAttributes, RoutesActionScreenType, routesActionScreen } from '@/core/routes/routes'
import { CardRouting } from '@/components/shared/Card/Card'

interface AboutScreenI {
	className?: string
}

const renderRoutesCards = (routes: RouteActionScreenAttributes[]) => {
	return routes.map(route => <CardRouting className={cn(cls.CardCls)} data={route} key={route.path} />)
}

const AboutScreen = (props: AboutScreenI) => {
	const { className = '' } = props

	return (
		<section className={cn(className, cls.AboutScreen)}>
			<TitleWithText
				title='“
					Всё ближайшее время  определит образование”'
				text='Участвуя в олимпиадах, входящих в перечень вы получаете шанс поступить в выбранное вами высшее учебное заведение без сдачи вступительных испытаний'
				author='Алексей Кудрин'
				className={cls.TextSectionClassName}
				titleClassname={cls.TitleClassName}
				textClassname={cls.TextClassName}
				authorClassname={cls.AuthorClassnme}
				button={
					<Button className={cls.BtnClassname}>
						<Typography text='Подробнее о льготах' />
						<LightArrowSvg className={cls.BtnArrowSvg} />
					</Button>
				}
			/>
			<div className={cls.CardsWrapper}>
				<div className={cls.CardsWrapperInner}>{renderRoutesCards(Object.values(routesActionScreen).splice(0, 2))}</div>
			</div>
		</section>
	)
}

export default AboutScreen
