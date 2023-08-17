import cls from './AboutScreen.module.css'
import cn from 'classnames'
import Typography from '@components/shared/ui/Typography/Typography'
import TitleWithText from '@/components/common/TitleWithText/TitleWithText'
import Button from '@/components/shared/ui/Button/Button'
import LightArrowSvg from '@/components/shared/assets/svg/LightArrowSvg'
import CardRoutesLayout from '@shared/layouts/CardsLayout/CardsLayout'
import { routesActionScreen } from '@/shared/routes/routes'
import ButtonWithArrow from '@/components/shared/ui/Button/ButtonWithArrow'

interface AboutScreenI {
  className?: string
}

const AboutScreen = (props: AboutScreenI) => {
  const { className = '' } = props

  return (
    <section className={cn(className, cls.AboutScreen)}>
      <TitleWithText
        title="“
					Всё ближайшее время  определит образование”"
        text="Участвуя в олимпиадах, входящих в перечень вы получаете шанс поступить в выбранное вами высшее учебное заведение без сдачи вступительных испытаний"
        author="Алексей Кудрин"
        className={cls.TextSectionClassName}
        titleClassname={cls.TitleClassName}
        textClassname={cls.TextClassName}
        authorClassname={cls.AuthorClassnme}
        button={<ButtonWithArrow text="Подробнее о льготах" />}
      />

      <CardRoutesLayout routes={Object.values(routesActionScreen).splice(0, 2)} className={cls.CardsWrapper} />
    </section>
  )
}

export default AboutScreen
