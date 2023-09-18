import cls from './SliderOrganisators.module.scss'
import {AppSlider} from "@shared/ui/AppSlider/AppSlider.tsx";
import cn from "classnames";
import OrganisatorImage from '@shared/assets/images/organisators/organisator.jpg'
import AppImage from "@shared/ui/AppImage/AppImage.tsx";
import Text from "@shared/ui/Text/Text.tsx";
import {VStack} from "@shared/ui/Stack";
import {forwardRef, Ref} from "react";
import Slider from "react-slick";

type SliderProps = {
  beforeChangeHandler?: (currentSlide: number, nextSlide: number) => void
  organisators?: { id: number }[]
}

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  // centerMode: true

}

export const SliderOrganisators = forwardRef((props: SliderProps, ref?: Ref<Slider>) => {
  const { beforeChangeHandler, organisators } = props
  console.log("organisators", organisators)
  return (
    <AppSlider beforeChangeHandler={beforeChangeHandler} ref={ref} className={cn(cls.SliderOrganisators)} settings={settings}>
      <>{organisators?.map((el) => <OrganisatorSlideItem key={el.id} />)}</>
    </AppSlider>
  )
})

type OrganisatorSlideItemProps = {
  image?: string
  name?: string
}
export const OrganisatorSlideItem = (props: OrganisatorSlideItemProps) => {
    const { image = '', name = 'Академия ФСБ России ' } = props
    return <VStack gap='24' className={cn(cls.OrganisatorSlideItem)}>
    <AppImage className={cn(cls.OrganisatorImage)} src={image || OrganisatorImage} />
    <Text className={cn(cls.OrganisatorName)} text={name} />
  </VStack>
}
