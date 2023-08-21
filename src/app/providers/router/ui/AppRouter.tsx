import { AppRoutesProps, routeConfig } from '@shared/routes/routes'
import { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoading } from '@shared/ui/PageLoading/PageLoading'

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {

    const element = <Suspense fallback={<PageLoading />}>{route.element}</Suspense>

    return <Route key={route.path} path={route.path} element={element} />
  }, [])

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}
