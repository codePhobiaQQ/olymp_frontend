import Typography from '@/components/shared/ui/Typography/Typography'
import cls from './PhraseScreen.module.css'
import cn from 'classnames'

interface PhraseScreenI {
	className?: string
}

const PhraseScreen = ({ className = '' }: PhraseScreenI) => {
	return (
		<div className={cn(className, cls.PhraseScreen)}>
			<Typography className={cn(cls.MotivationPhrase)} text='КАКАЯ-ТО МОТИВИРУЮЩАЯ ФРАЗА' />
		</div>
	)
}

export default PhraseScreen
