import cn from 'classnames'
import cls from './OffInfo.module.scss'
import { useSelector } from 'react-redux'
import {
  getChairmanMethodologicalCommission,
  getChairmanOrganizingCommittee,
  getDatesVenuesFinalStage,
  getFullName,
  getOlympOrgs,
  getStages,
} from '@pages/NewsPage/model/selectors/offPageSelectors.ts'

type OffInfoProps = {
  className?: string
}

export const OffInfo = (props: OffInfoProps) => {
  const { className = '' } = props

  const fullName = useSelector(getFullName)
  const organisators = useSelector(getOlympOrgs)
  const chairmanOrganizingCommittee = useSelector(getChairmanOrganizingCommittee)
  const chairmanMethodologicalCommission = useSelector(getChairmanMethodologicalCommission)
  const stages = useSelector(getStages)
  const dates = useSelector(getDatesVenuesFinalStage)

  return (
    <div className={cn(className, cls.OffInfo)}>
      {fullName && (
        <div className={cn(cls.OffInfoItem)}>
          <div className={cn(cls.OffInfoItemTitle)}>Полное название олимпиады</div>
          <div className={cn(cls.OffInfoItemContent)}>{fullName}</div>
        </div>
      )}
      {organisators && (
        <div className={cn(cls.OffInfoItem)}>
          <div className={cn(cls.OffInfoItemTitle)}>Организаторы</div>
          <div className={cn(cls.OffInfoItemContent)}>{organisators}</div>
        </div>
      )}
      {chairmanOrganizingCommittee && (
        <div className={cn(cls.OffInfoItem)}>
          <div className={cn(cls.OffInfoItemTitle)}>Председатель оргкомитета</div>
          <div className={cn(cls.OffInfoItemContent)}>{chairmanOrganizingCommittee}</div>
        </div>
      )}
      {chairmanMethodologicalCommission && (
        <div className={cn(cls.OffInfoItem)}>
          <div className={cn(cls.OffInfoItemTitle)}>Председатель оргкомитета</div>
          <div className={cn(cls.OffInfoItemContent)}>{chairmanMethodologicalCommission}</div>
        </div>
      )}
      {stages && (
        <div className={cn(cls.OffInfoItem)}>
          <div className={cn(cls.OffInfoItemTitle)}>Этапы проведения олимпиады</div>
          <div className={cn(cls.OffInfoItemContent)}>{stages}</div>
        </div>
      )}
      {dates && (
        <div className={cn(cls.OffInfoItem)}>
          <div className={cn(cls.OffInfoItemTitle)}>Сроки и места проведения заключительного этапа</div>
          <div className={cn(cls.OffInfoItemContent)}>{dates}</div>
        </div>
      )}
    </div>
  )
}
