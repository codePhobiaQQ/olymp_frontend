import { ConfigProvider } from 'antd'
import './styles/index.scss'
import { Dialog } from '@shared/ui/Dialog/Dialog'
import { Input } from '@shared/ui/Input/Input'
import { antdComponentsConfig } from '@/core/config/AntdComponentsConfig.ts'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextPlaceholder: 'rgba(0, 0, 0, .5)',
        },
        components: antdComponentsConfig,
      }}
    >
      <Dialog>
        <Input />
        <Input />
      </Dialog>
    </ConfigProvider>
  )
}

export default App
