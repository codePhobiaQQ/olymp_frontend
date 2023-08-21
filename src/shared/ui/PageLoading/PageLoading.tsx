import cn from 'classnames'
import cls from './PageLoading.module.scss'
import { ReactComponent as Logo } from '@shared/assets/svg/Logo.svg'
import { Page } from '@widgets/Page'

type PageLoadingProps = {
  className?: string;
};

export const PageLoading = (props: PageLoadingProps) => {
  const { className } = props

  return (
    <Page className={cn(className, cls.PageLoading)}>
      <Logo className={cls.Logo} />
    </Page>
  )
}