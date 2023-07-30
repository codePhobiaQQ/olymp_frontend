import { Route, Routes } from 'react-router-dom'
import { AppRoutesProps, routeConfig } from './core/routes/routes'
import './styles'

const renderRoutes = (route: AppRoutesProps) => {
	return <Route key={route.path} path={route.path} element={route.element} />
}

function App() {
	return <Routes>{Object.values(routeConfig).map(route => renderRoutes(route))}</Routes>
}

export default App
