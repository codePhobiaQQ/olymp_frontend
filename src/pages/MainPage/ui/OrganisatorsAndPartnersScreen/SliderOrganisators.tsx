import cn from 'classnames'
import cls from './SliderOrganisators.module.scss'
import Slider from 'react-slick'

type SliderProps = {
  className?: string
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export const SliderOrganisators = (props: SliderProps) => {
  const { className = '' } = props

  return (
    <div className={cn(className, cls.SliderOrganisators)}>
      <Slider {...settings}>
        <div className={cls.SliderItem}>1</div>
        <div className={cls.SliderItem}>2</div>
      </Slider>
    </div>
  )
}
