import './styles/index.scss'
import { ConfigProvider } from 'antd'
import { componentsConfig } from '@core/config/antd/componentsConfig.ts'
import { tokenConfig } from '@core/config/antd/tokenConfig'
import { Route, Routes } from 'react-router-dom'
import { PageHoc } from '@shared/hoc'
import { routes } from '@core/config/routes'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: tokenConfig,
        components: componentsConfig,
      }}
    >
      <PageHoc>
        <Routes>
          {routes.map(route => {
            return <Route key={route.path} path={route.path} element={route.element} />
          })}
        </Routes>
      </PageHoc>
    </ConfigProvider>
  )
}

export default App
