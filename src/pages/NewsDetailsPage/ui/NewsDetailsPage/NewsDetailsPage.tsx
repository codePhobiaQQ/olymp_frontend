import { Page } from '@widgets/Page'

type NewsDetailsPageProps = {
  className?: string;
};

const NewsDetailsPage = (props: NewsDetailsPageProps) => {
  const { className } = props

  return (
    <Page>
      news details page
    </Page>
  )
}

export default NewsDetailsPage