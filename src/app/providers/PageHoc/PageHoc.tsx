import { ReactNode } from 'react';
import PageLayout from '@shared/layouts/PageLayout/PageLayout.tsx';

type PageHocProps = {
  children?: ReactNode
};

export const PageHoc = (props: PageHocProps) => {
  const { children } = props;

  return (
    <PageLayout>
      {children}
    </PageLayout>
  );
};