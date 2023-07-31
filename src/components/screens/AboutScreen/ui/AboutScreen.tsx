import cls from './AboutScreen.module.css'
import cn from 'classnames'
import Typography from '@components/shared/ui/Typography/Typography'
import TitleWithText from '@/components/common/TitleWithText/TitleWithText'
import Button from '@/components/shared/ui/Button/Button'
import ArrowSvg from '@/components/shared/assets/svg/ArrowSvg'
import LightArrowSvg from '@/components/shared/assets/svg/LightArrowSvg'

interface AboutScreenI {
	className?: string
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
		</section>
	)
}

export default AboutScreen
