import { MainPage } from '@components/pages/MainPage'
import { OlympPage } from '@components/pages/OlympPage'

export const routes = [
  {
    path: '/',
    navLabel: 'Главная',
    element: <MainPage />,
  },
  {
    path: '/olymp',
    navLabel: 'Олимпиады',
    element: <OlympPage />,
  },
  {
    path: '/olymp123',
    navLabel: 'Олимпиады',
    element: <OlympPage />,
  },
  {
    path: '/olymp345',
    navLabel: 'Олимпиады',
    element: <OlympPage />,
  },
  {
    path: '/olymp245',
    navLabel: 'Олимпиады',
    element: <OlympPage />,
  },
]

export const renderNavigationLinks = (): { to: string, navLabel: string }[] => {
  return routes.map(route => ({ to: route.path, navLabel: route.navLabel }))
}