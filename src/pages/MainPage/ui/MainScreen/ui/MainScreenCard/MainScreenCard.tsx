import { Title } from '@shared/ui/titles'
import cls from './MainScreenCard.module.scss'
import cn from 'classnames'
import { CardItem } from '@pages/MainPage/ui/MainScreen/model/data/data.ts'
import { HStack, VStack } from '@shared/ui/Stack';
import { ArrowLink } from '@shared/ui/links/ArrowLink/ArrowLink.tsx';


interface CardI {
  className?: string
  data: CardItem
}

export const MainScreenCard = (props: CardI) => {
  const { className = '', data } = props

  return (
    <VStack className={cn(className, cls.MainScreenCard)}>
      <HStack max className={cn(cls.CardTitleWrapper)}>
        <Title tag='h4' className={cn(cls.CardTitle)} text={data?.title} />
      </HStack>


      <ul className={cn(cls.CardList)}>
        {data?.links?.map((link, index) => (
          <li key={index + 'link' + link.path}>
            <ArrowLink textProps={{ text: link.text, fontFamily: 'msb', isUppercase: true }} linkProps={{ to: link.path }} arrowProps={{ color: 'grey' }} />
          </li>
        ))}
      </ul>
    </VStack>
  )
}