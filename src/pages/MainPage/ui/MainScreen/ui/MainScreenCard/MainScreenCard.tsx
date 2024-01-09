import AppLink from '@shared/ui/AppLink/AppLink'
import Title from '@shared/ui/Title/Title'
import cls from './MainScreenCard.module.scss'
import cn from 'classnames'
import { CardItem } from '@pages/MainPage/ui/MainScreen/model/data/data.ts'
import { VStack } from '@shared/ui/Stack';


interface CardI {
  className?: string
  data: CardItem
}

export const MainScreenCard = (props: CardI) => {
  const { className = '', data } = props

  return (
    <VStack className={cn(className, cls.MainScreenCard)}>
      <Title tag='h4' className={cn(cls.CardTitle)} text={data?.title} />

      <ul className={cn(cls.CardList)}>
        {data?.links?.map((link, index) => (
          <li key={index + 'link' + link.path}>
            <AppLink color='grey' textProps={{ text: link.text }}  to={link.path} />
          </li>
        ))}
      </ul>
    </VStack>
  )
}