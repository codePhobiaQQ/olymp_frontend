import cn from 'classnames'
import cls from './OlympDetailsNewsContent.module.scss'
import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx'
import { useSelector } from 'react-redux'
import { getNewsCategories } from './../../../model/selectors/olympDetailsSelectors.ts'

type OlympDetailsNewsContentProps = {
  className?: string
}

// const reducer: ReducersList = {
//
// }

export const OlympDetailsNewsContent = (props: OlympDetailsNewsContentProps) => {
  const { className = '' } = props
  const newsCategories = useSelector(getNewsCategories)

  return (
    <DynamicModuleLoader reducers={{}}>
      <div className={cn(className, cls.OlympDetailsNewsContent)}>here {newsCategories.join(' ')}</div>
    </DynamicModuleLoader>
  )
}
