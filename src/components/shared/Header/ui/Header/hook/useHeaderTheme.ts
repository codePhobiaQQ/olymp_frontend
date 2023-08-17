import { routeConfig } from '@/shared/routes/routes'
import { useLocation } from 'react-router-dom'
import { HeaderTheme } from '../Header'

const useHeaderTheme = () => {
  const { pathname } = useLocation()

  let _HeaderTheme: HeaderTheme = HeaderTheme.DARK

  Object.values(routeConfig).forEach((route) => {
    if (route.path == pathname && route.headerTheme) {
      _HeaderTheme = route?.headerTheme
    }
  })

  return {
    HeaderTheme: _HeaderTheme,
  }
}

export default useHeaderTheme
