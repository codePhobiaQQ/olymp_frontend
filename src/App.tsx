import './styles/index.scss'
import { ConfigProvider } from 'antd'
import { componentsConfig } from '@core/config/antd/componentsConfig.ts'
import { ReactComponent as MySuperCustomIconComponent } from '@assets/svg/logo/logo.svg'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextPlaceholder: 'rgba(0, 0, 0, .5)',
        },
        components: componentsConfig,
      }}
    >
      <>
        <MySuperCustomIconComponent />
      </>
    </ConfigProvider>
  )
}

export default App
