import { useRef, useState } from 'react'
import cls from './SliderApp.module.scss'
import Slider from 'react-slick'
import { Settings as SliderSettings } from 'react-slick'
import cn from 'classnames'
import Text from '@shared/ui/Text/Text'
import AppImage from '@shared/ui/AppImage/AppImage.tsx';

interface SliderAppProps extends SliderSettings {
  className?: string
  slides: string[]
}

export function SliderApp(props: SliderAppProps) {
  const { slides, className, dots = true, arrows = false, ...otherProps } = props
  const sliderRef = useRef<Slider>(null)

  const clickNextHandler = () => {
    sliderRef.current?.slickNext()
  }

  const clickPrevHandler = () => {
    sliderRef.current?.slickPrev()
  }

  // Current slide
  const [currentSlide, setCurrentSlide] = useState<number>(1)
  const afterChange = (slide: number) => {
    setCurrentSlide(slide + 1)
  }

  const customPaging = (_: number) => {
    return <div className={cn(cls.Dot)}></div>
  }

  return (
    <div className={cn(className, cls.SliderWrapper)}>
      <Slider
        afterChange={afterChange}
        customPaging={customPaging}
        {...otherProps}
        arrows={arrows}
        dots={dots}
        className={cn(cls.Slider)}
        ref={sliderRef}
      >
        {slides?.map((slide, index) => (
          <AppImage key={index} className={cn('h_all', cls.SliderItem)} src={slide} />
        ))}
      </Slider>

      {Boolean(arrows && slides?.length > 1) && (
        <div className={cls.BtnWrapper}>
          <button onClick={clickPrevHandler} className={cn(cls.Btn, cls.Prev)}>
            {/*<ArrowSvg className={cls.Arrow} />*/}
          </button>
          <button onClick={clickNextHandler} className={cn(cls.Btn, cls.Next)}>
            {/*<ArrowSvg className={cls.Arrow} />*/}
          </button>
        </div>
      )}

      {slides?.length > 1 && (
        <Text fontSize='10' className={cls.Amount} text={currentSlide + ' / ' + slides?.length} />
      )}
    </div>
  )
}
