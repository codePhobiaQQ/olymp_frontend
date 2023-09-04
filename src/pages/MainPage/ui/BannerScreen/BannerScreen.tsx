import cn from 'classnames'
import cls from './BannerScreen.module.scss'
import { ReactComponent as VOlymp } from '@shared/assets/images/svg/v-olymp.svg'

type BannerScreenProps = {
  className?: string;
};

export const BannerScreen = (props: BannerScreenProps) => {
  const { className } = props

  return (
    <div className={cn(className, cls.BannerScreen)}>

      <div className={cn(cls.BannerWrapper)}>
      <div className={cn(cls.Banner)}>
        {Array(20).fill('').map((_, index) => <div key={index} className={cn(cls.LogoWrapper)}>
          <VOlymp className={cn(cls.Logo)} />
        </div>)}
      </div>
      </div>
    </div>
  )
}