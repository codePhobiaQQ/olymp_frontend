import Footer from '@widgets/Footer/Footer'
import cls from './PageLayout.module.scss'
import Header, { HeaderTheme } from '@widgets/Header/ui/Header/Header'
import { ReactNode } from 'react';
import cn from 'classnames';

interface PageHocI {
  children?: ReactNode
}

const PageLayout = ({ children }: PageHocI) => {
  return (
    <div className={cn(cls.PageLayout)}>
      <Header theme={HeaderTheme.DARK} />
      {children}
      <Footer />
    </div>
  )
}

export default PageLayout
