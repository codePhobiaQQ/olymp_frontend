import cls from './OrganisatorsAndPartnersScreen.module.scss'
import cn from 'classnames'
import Button from '@shared/ui/Button/Button.tsx'
import {SliderOrganisators} from '@pages/MainPage/ui/OrganisatorsAndPartnersScreen/SliderOrganisators.tsx'
import {Title} from "@shared/ui/SectionTitle/Title.tsx";
import {useCallback, useRef, useState} from "react";
import {ReactComponent as Arrow} from '@shared/assets/svg/decor/arrow.svg'
import Slider from "react-slick";
import {HStack} from "@shared/ui/Stack";

interface OrganisatorsAndPartnersI {
  className?: string
}

const organisators = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}, {id: 11}]

const OrganisatorsAndPartnersScreen = ({className = ''}: OrganisatorsAndPartnersI) => {
  const sliderRef = useRef<Slider>(null)

  const [currentIndex, setCurrentIndex] = useState(0);
  const beforeChangeHandler = (_: number, nextSlide: number) => {
    setCurrentIndex(nextSlide)
  }

  const clickNextHandler = useCallback(() => {
    sliderRef.current?.slickNext()
  }, [])
  const clickPrevHandler = useCallback(() => {
    sliderRef.current?.slickPrev()
  }, [])

  return (
    <section className={cn(className, cls.OrganisatorsAndPartnersScreen)}>
      <div className={cls.container}>
        <Title variant='h2'>организаторы и партнеры</Title>

        <HStack gap='32'>
          <div onClick={clickPrevHandler} className={cn(cls.Arrow)}><Arrow className={cls.prev}/></div>
          <div className={cn(cls.Page)}>{currentIndex + 1} из {organisators.length}</div>
          <div onClick={clickNextHandler} className={cn(cls.Arrow)}><Arrow/></div>
        </HStack>
      </div>

      <div className={cls.container}>
        <div className={cn(cls.OrganisatorsList)}>
          <SliderOrganisators organisators={organisators} beforeChangeHandler={beforeChangeHandler} ref={sliderRef}/>
        </div>
      </div>

      <div className={cls.container}>
        <Button className={cn(cls.BtnMore)} variant={'outline_transparent_arrow'}>
          Полный список ВУЗов
        </Button>
      </div>
    </section>
  )
}

export default OrganisatorsAndPartnersScreen
