import cn from 'classnames'

import '@shared/assets/styles'
import 'reset-css'

import { AppRouter } from '@app/providers/router'
import { Header } from '@widgets/Header'
import Footer from '@widgets/Footer/Footer'

function App() {
  return (
    <div className={cn('app')}>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App
