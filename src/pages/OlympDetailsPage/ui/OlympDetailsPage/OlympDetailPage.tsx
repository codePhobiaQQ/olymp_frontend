import cls from './OlympDetailPage.module.scss'
import cn from 'classnames'
import { TitleScreen } from '../TitleScreen/TitleScreen.tsx'
import { OlympDetailsMenu } from './../OlympDetailsMenu/OlympDetailsMenu.tsx'
import { OlympDetailsContent } from './../OlympDetailsContent/OlympDetailsContent.tsx'
import { DynamicModuleLoader, ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx'
import { OlympDetailsPageReducer } from './../../model/slice/olympDetailsPageSlice.ts'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOlympsDetails } from './../../model/services/fetchOlympDetails.ts'
import { getIsLoading, getError } from './../../model/selectors/olympDetailsSelectors.ts'

const reducers: ReducersList = {
  olympDetailsPage: OlympDetailsPageReducer,
}

const OlympDetailPage = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)

  useEffect(() => {
    const olympLink = window.location.href.split('/').slice(-1)[0]
    // @ts-ignore
    dispatch(fetchOlympsDetails(olympLink))
  }, [])

  let content
  if (isLoading) {
    content = 'Loading'
  } else if (error) {
    content = 'error'
  } else {
    content = (
      <>
        <TitleScreen />
        <div className={cn(cls.OlympDetailPageContentWrapper)}>
          <OlympDetailsMenu className={cn(cls.OlympDetailPageMenu)} />
          <OlympDetailsContent className={cn(cls.OlympDetailPageContent)} />
        </div>
      </>
    )
  }

  return (
    <DynamicModuleLoader removeAfterUnmount={true} reducers={reducers}>
      <div className={cn(cls.OlympDetailPage)}>{content}</div>
    </DynamicModuleLoader>
  )
}

export default OlympDetailPage
