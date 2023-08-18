import { AppRoutesProps, routeConfig } from '@shared/routes/routes'
import { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {

    const element = <Suspense fallback='Loading...'>{route.element}</Suspense>

    return <Route key={route.path} path={route.path} element={element} />
  }, [])

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}