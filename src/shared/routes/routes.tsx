import actionCard1 from '@shared/assets/images/actions/actionCard1.jpg'
import actionCard2 from '@shared/assets/images/actions/2.jpg'
import actionCard3 from '@shared/assets/images/actions/3.jpg'
import actionCard4 from '@shared/assets/images/actions/4.jpg'
import actionCard5 from '@shared/assets/images/actions/5.jpg'
import actionCard6 from '@shared/assets/images/actions/6.jpg'

import { RouteProps } from 'react-router-dom'
import { MainPage } from '@pages/MainPage'
import { OlympsPage } from '@pages/OlympsPage'
import { NewsPage } from '@pages/NewsPage'
import { HeaderTheme } from '@widgets/Header'
import { NewsDetailsPage } from '@pages/NewsDetailsPage'

// -------------------------
// ------ Core routes ------
// -------------------------

export enum AppRoutes {
  Main = 'main',
  Olymps = 'olymps',
  News = 'news',
  NewsDetails = 'news_details',
  OnlineStudy = 'online',
  OlympSchedule = 'olymp-schedule',
  FAQ = 'faq',
  UNIVERSITY_REGISTRATION = 'university-registration',
  LK = 'lk',
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.News]: '/news',
  [AppRoutes.NewsDetails]: '/news' + '/:id',
  [AppRoutes.OnlineStudy]: '/online-study',
  [AppRoutes.OlympSchedule]: '/online-study',
  [AppRoutes.FAQ]: '/faq',
  [AppRoutes.UNIVERSITY_REGISTRATION]: '/university-registration',
  [AppRoutes.LK]: '/lk',
  [AppRoutes.Olymps]: '/olymps',
}

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  label?: string
  headerTheme?: HeaderTheme
}

type RoutesType = Record<AppRoutes, AppRoutesProps>

export const routeConfig: Omit<RoutesType, 'Component'> = {
  [AppRoutes.Main]: {
    label: 'Главная',
    path: routePath[AppRoutes.Main],
    element: <MainPage />,
  },
  [AppRoutes.Olymps]: {
    label: 'Олимпиады',
    path: routePath[AppRoutes.Olymps],
    element: <OlympsPage />,
  },
  [AppRoutes.News]: {
    label: 'Новости',
    path: routePath[AppRoutes.News],
    element: <NewsPage />,
  },
  [AppRoutes.NewsDetails]: {
    label: 'Новости',
    path: routePath[AppRoutes.News],
    element: <NewsDetailsPage />,
  },
  [AppRoutes.OnlineStudy]: {
    label: 'Онлайн обучение',
    path: routePath[AppRoutes.OnlineStudy],
  },
  [AppRoutes.OlympSchedule]: {
    label: 'Онлайн обучение',
    path: routePath[AppRoutes.OlympSchedule],
  },
  [AppRoutes.FAQ]: {
    path: routePath[AppRoutes.FAQ],
    label: undefined,
  },
  [AppRoutes.UNIVERSITY_REGISTRATION]: {
    path: routePath[AppRoutes.UNIVERSITY_REGISTRATION],
    label: undefined,
  },
  [AppRoutes.LK]: {
    path: routePath[AppRoutes.LK],
    label: undefined,
  },
}

// -------------------------
// ----- Action screen -----
// -------------------------

export type RouteActionScreenAttributes = AppRoutesProps & {
  title?: string
  description?: string
  image?: string
}

export type RoutesActionScreenType = PartialRecord<AppRoutes, RouteActionScreenAttributes>

export const routesActionScreen: RoutesActionScreenType = {
  [AppRoutes.News]: {
    ...routeConfig[AppRoutes.News],
    id: '1',
    title: 'Новости',
    description: 'Самая актуальная информация о мероприятиях, проводимых порталом v-olymp.ru',
    image: actionCard1,
  },
  [AppRoutes.OnlineStudy]: {
    ...routeConfig[AppRoutes.OnlineStudy],
    id: '2',
    title: 'Онлайн-обучение',
    description:
      'В данном разделе представлены материалы для подготовки к олимпиаде,  а также сдачи вступительных испытаний',
    image: actionCard2,
  },
  [AppRoutes.OlympSchedule]: {
    ...routeConfig[AppRoutes.OlympSchedule],
    id: '3',
    title: 'РАСПИСАНИЕ ОЛИМПИАД',
    description: 'Следите за обновлениями данного раздела, чтобы не пропустить важные мероприятия',
    image: actionCard3,
  },
  [AppRoutes.FAQ]: {
    ...routeConfig[AppRoutes.FAQ],
    id: '4',
    title: 'частозадаваемые вопросы',
    description: 'Самая актуальная информация о мероприятиях, проводимых порталом v-olymp.ru',
    image: actionCard4,
  },
  [AppRoutes.UNIVERSITY_REGISTRATION]: {
    ...routeConfig[AppRoutes.UNIVERSITY_REGISTRATION],
    id: '5',
    title: 'регистрация для вузов',
    description:
      'Если вы являетесь представителем ВУЗа и у Вас есть желание проводить олимпиады на базе Вашего учебного заведения',
    image: actionCard5,
  },
  [AppRoutes.LK]: {
    ...routeConfig[AppRoutes.LK],
    id: '6',
    title: 'личный кабинет',
    description: 'В этом разделе будут представлена',
    image: actionCard6,
  },
}
