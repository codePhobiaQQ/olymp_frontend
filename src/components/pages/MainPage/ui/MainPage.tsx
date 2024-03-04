import * as React from 'react'
import { OlympsScreen } from './OlympsScreen/OlympsScreen'
import { AboutScreen } from '@components/pages/MainPage/ui/AboutScreen/AboutScreen'

const MainPage = () => {
  return (
    <>
      <OlympsScreen />
      <AboutScreen />
    </>
  )
}

export default MainPage