import { ReactNode } from 'react'
import { Header } from '@shared/hoc/PageHoc/Header'
import { Footer } from '@shared/hoc/PageHoc/Footer'
import { Navigation } from '@shared/hoc/PageHoc/Navigation/Navigation'

interface PageHocI {
  children?: ReactNode
}

const PageHoc = ({ children }: PageHocI) => {
  return (
    <>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default PageHoc
