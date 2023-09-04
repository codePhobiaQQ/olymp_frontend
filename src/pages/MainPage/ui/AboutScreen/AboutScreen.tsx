import cn from 'classnames'
import cls from './AboutScreen.module.scss'
import AppImage from '@shared/ui/AppImage/AppImage'
import waveImage from '@shared/assets/svg/decor/wave.svg'
import Title, { TitleTheme } from '@shared/ui/Title/Title'
import { useSelector } from 'react-redux'
import { getAboutScreenDescription, getAboutScreenTitle } from '@pages/MainPage/model/selectors/mainPageSelectors'
import { WpTextFormatter } from '@shared/ui/WpTextFormatter/WpTextFormatter'

type AboutScreenProps = {
  className?: string;
};

export const AboutScreen = (props: AboutScreenProps) => {
  const { className } = props
  const title = useSelector(getAboutScreenTitle)
  const description = useSelector(getAboutScreenDescription)

  return (
    <section className={cn(className, cls.AboutScreen)}>
      <div className={cn(cls.LeftSide)}>
        <Title theme={TitleTheme.H2} text={title} />
        <WpTextFormatter content={description} />
      </div>
      <AppImage className={cls.WaveWrapper} src={waveImage} />
    </section>
  )
}