import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter basename='/'>
			<StoreProvider>
				<App />
			</StoreProvider>
		</BrowserRouter>
	</React.StrictMode>
)
