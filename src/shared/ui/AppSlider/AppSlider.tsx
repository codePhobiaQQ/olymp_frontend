import cn from 'classnames';
import cls from './AppSlider.module.scss';
import Slider, {Settings} from "react-slick";
import {forwardRef, LegacyRef, ReactNode} from "react";

type AppSliderProps = {
  className?: string;
  settings?: Settings
  children?: ReactNode
  beforeChangeHandler?: (currentSlide: number, nextSlide: number) => void
};

const defaultSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const AppSlider = forwardRef((props: AppSliderProps, ref: LegacyRef<Slider>) => {
  const {className = '', settings = defaultSettings, beforeChangeHandler, children} = props

  return (
    <Slider beforeChange={beforeChangeHandler} ref={ref} {...settings} className={cn(className, cls.AppSlider)}>
      {children}
    </Slider>
  );
});