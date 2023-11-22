import '@shared/assets/styles'
import cn from 'classnames'
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
