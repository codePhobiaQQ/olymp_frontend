import cn from 'classnames'
import cls from './OlympList.module.scss'
import { useSelector } from 'react-redux'
import { getOlympsList, getIsLoading, getError } from './../../model/selectors/olympsPageSelectors.ts'
import { CardRouting } from '@shared/ui/Card/Card.tsx'
import Text from '@shared/ui/Text/Text.tsx'

type OlympListProps = {
  className?: string
}

export const OlympList = (props: OlympListProps) => {
  const { className = '' } = props

  const olympList = useSelector(getOlympsList)
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)

  let content
  if (isLoading) {
    content = (
      <>
        <Text text={'Загрузка'} />
      </>
    )
  } else if (error && !isLoading) {
    content = <Text text={'Ошибка при загрузке'} />
  } else {
    content = (
      <div className={cn(className, cls.OlympListInnerWrapper)}>
        {olympList.map((olympItem) => (
          <CardRouting
            key={olympItem.olymp_id}
            className={'m_b_15'}
            data={{
              title: olympItem.olymp_name,
              image: olympItem.olymp_preview_image,
              path: olympItem.olymp_link,
            }}
          />
        ))}
      </div>
    )
  }

  return <div className={cn(className, cls.OlympList)}>{content}</div>
}
