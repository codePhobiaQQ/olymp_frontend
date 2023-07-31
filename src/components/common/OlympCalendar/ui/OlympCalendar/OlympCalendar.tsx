import { useCallback, useState } from 'react'
import cls from './OlympCalendar.module.scss'
import cn from 'classnames'
import Calendar from 'react-calendar'
import CalendarIconSvg from '@/components/shared/assets/svg/CalendarIconSvg'

interface OlympCalendarI {
	className?: string
}

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const OlympCalendar = ({ className = '' }: OlympCalendarI) => {
	const [value, onChange] = useState<Value>(new Date())
	const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false)

	const toggleCalendar = useCallback(() => {
		setIsCalendarOpen(prevState => !prevState)
	}, [setIsCalendarOpen])

	return (
		<div className={cn(className, cls.OlympCalendar)}>
			<CalendarIconSvg onClick={toggleCalendar} className={cls.HeaderActionsWrapperIcon} />
			{isCalendarOpen && (
				<div className={cls.CalendarWrapper}>
					<Calendar showDoubleView={false} onChange={onChange} value={value} />
				</div>
			)}
		</div>
	)
}

export default OlympCalendar
