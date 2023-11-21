import cn from 'classnames'
import '@shared/assets/styles'
import 'reset-css'
import { AppRouter } from '@app/providers/router'
import { PageHoc } from '@app/providers/PageHoc/PageHoc.tsx';

function App() {
  return (
    <div className={cn('app')}>
      <PageHoc>
        <AppRouter />
      </PageHoc>
    </div>
  )
}

export default App
