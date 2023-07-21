// ---- Styles ----
//Global------------
import './styles/framework.css'
import './styles/global.sass'
import './styles/var/mixin.css'
import './styles/var/var.css'

//------------------
//Inline classes----
import './styles/fz.css'
import './styles/margins/index.css'
import './styles/paddings/index.css'

import './styles/absolute/index.css'
import './styles/sizes/height.css'
import './styles/sizes/width.css'

import './styles/color.css'
import './styles/opacity.css'
import './styles/order.css'

// ---- Components ----
import './styles/components/index.scss'

// ----

import { Route, Routes } from 'react-router-dom'
import { MainPage } from './components/pages'
import { FullPage } from './components/hoc'

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<FullPage>
						<></>
					</FullPage>
					// <MainPage />
				}
			/>
		</Routes>
	)
}

export default App
