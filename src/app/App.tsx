import { Route, Routes } from 'react-router-dom'
import { AppRoutesProps, routeConfig } from '../core/routes/routes'
import cn from 'classnames'
import '../styles'

const renderRoutes = (route: AppRoutesProps) => {
	return <Route key={route.path} path={route.path} element={route.element} />
}

function App() {
	return <div className={cn('app')}>
		<Routes>{Object.values(routeConfig).map(route => renderRoutes(route))}</Routes>
	</div>
}

export default App
