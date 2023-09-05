import cn from 'classnames'
import cls from './OlympPage.module.scss'
import { DynamicModuleLoader, ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx'
import { OlympsPageReducer } from '@pages/OlympsPage/model/slice/olympsPageSlice.ts'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchOlympsPageData } from '@pages/OlympsPage/model/services/fetchOlympsPageData.ts'
import { OlympList } from '@pages/OlympsPage/ui/OlympList/OlympList.tsx'

type OlympPageProps = {
  className?: string
}

const reducers: ReducersList = {
  olympsPage: OlympsPageReducer,
}

const OlympPage = (props: OlympPageProps) => {
  const dispatch = useDispatch()
  const { className = '' } = props

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchOlympsPageData())
  }, [])

  return (
    <DynamicModuleLoader removeAfterUnmount={false} reducers={reducers}>
      <div className={cn(className, cls.OlympPage)}>
        <OlympList />
      </div>
    </DynamicModuleLoader>
  )
}

export default OlympPage
