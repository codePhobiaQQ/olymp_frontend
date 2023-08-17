import Footer from '@/widgets/Footer/Footer'
import Header, { HeaderTheme } from '@/widgets/Header/ui/Header/Header'

interface PageHocI {
  children?: React.ReactNode
}

const PageHoc = ({ children }: PageHocI) => {
  return (
    <>
      <Header theme={HeaderTheme.DARK} />
      {children}
      <Footer />
    </>
  )
}

export default PageHoc
