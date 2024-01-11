import Footer from '@widgets/Footer/Footer'
import cls from './PageLayout.module.scss'
import Header from '@widgets/Header/ui/Header/Header'
import { ReactNode } from 'react';
import cn from 'classnames';

interface PageHocI {
  children?: ReactNode
}

export const PageLayout = ({ children }: PageHocI) => {
  return (
    <div className={cn(cls.PageLayout)}>
      <Header theme='dark' />
      {children}
      <Footer />
    </div>
  )
}
