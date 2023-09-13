import { useSelector } from 'react-redux'
import {
  getMainPageCard1Olymp1Link,
  getMainPageCard1Olymp1Name,
  getMainPageCard1Title,
  getMainPageSubtitle,
} from '@pages/MainPage/model/selectors/mainPageSelectors'
import { CardItem } from '@pages/MainPage/ui/MainScreen/model/data/data'

interface useGetMainScreenDataReturn {
  subTitle: string
  cardsData: CardItem[]
}

export const useGetMainScreenData = (): useGetMainScreenDataReturn => {
  const subTitle = useSelector(getMainPageSubtitle)
  const card1Title = useSelector(getMainPageCard1Title)
  const card1Olymp1Name = useSelector(getMainPageCard1Olymp1Name)
  const card1Olymp1Link = useSelector(getMainPageCard1Olymp1Link)

  const cardsData: CardItem[] = [
    {
      title: card1Title,
      links: [
        {
          path: card1Olymp1Link,
          text: card1Olymp1Name,
        },{
          path: card1Olymp1Link,
          text: card1Olymp1Name,
        },{
          path: card1Olymp1Link,
          text: card1Olymp1Name,
        },
      ],
    },
    {
      title: card1Title,
      links: [
        {
          path: card1Olymp1Link,
          text: card1Olymp1Name,
        },{
          path: card1Olymp1Link,
          text: card1Olymp1Name,
        },{
          path: card1Olymp1Link,
          text: card1Olymp1Name,
        },
      ],
    },
    {
      title: card1Title,
      links: [
        {
          path: card1Olymp1Link,
          text: card1Olymp1Name,
        },{
          path: card1Olymp1Link,
          text: card1Olymp1Name,
        }, {
          path: card1Olymp1Link,
          text: card1Olymp1Name,
        },
      ],
    },
  ]

  return {
    subTitle,
    cardsData,
  }
}
