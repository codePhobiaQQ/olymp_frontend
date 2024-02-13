import { ConfigProvider } from 'antd'
import './styles/index.scss'
import { Dialog } from '@shared/ui/Dialog/Dialog'
import { Input } from '@shared/ui/Input/Input'


function App() {
  return (<ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
        borderRadius: 2,
        colorBgContainer: '#f6ffed',
      },
    }}>
    <Dialog>
      <Input />
    </Dialog>
  </ConfigProvider>)
}

export default App
