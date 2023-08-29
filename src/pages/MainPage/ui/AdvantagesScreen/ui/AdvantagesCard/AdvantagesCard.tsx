import Title, { TitleTheme } from '@shared/ui/Title/Title'
import { advantageData } from '../../model/data'
import styles from './AdvantagesCard.module.css'
import cn from 'classnames'
import Text from '@shared/ui/Text/Text'

interface AdvantagesCardI {
  className?: string
  data?: advantageData
}

const AdvantagesCard = ({ className = '', data }: AdvantagesCardI) => {
  return (
    <div className={cn(className, styles.AdvantagesCard)}>
      <Title
        theme={TitleTheme.H4}
        text={`${data?.prevSymbol ? data.prevSymbol : ''} ${data?.number} ${data?.afterSymbol ? data.afterSymbol : ''}`}
      />
      <Text className="ff-r fz_16" text={data?.text} />
    </div>
  )
}

export default AdvantagesCard
