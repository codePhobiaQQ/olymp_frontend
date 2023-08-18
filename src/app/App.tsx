import cn from 'classnames'
import '@shared/assets/styles'
import { AppRouter } from '@app/providers/router'

function App() {
  return (
    <div className={cn('app')}>
      <AppRouter />
    </div>
  )
}

export default App
