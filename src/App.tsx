import { Route, Routes } from 'react-router-dom'
import { RouteAttributes, routes } from './core/routes'
import './index.css'

const renderRoutes = (route: RouteAttributes) => {
	return <Route key={route.path} path={route.path} element={route.element} />
}

function App() {
	return <Routes>{Object.values(routes).map(route => renderRoutes(route))}</Routes>
}

export default App
