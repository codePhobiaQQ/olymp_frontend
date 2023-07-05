import styles from './Card.module.css'
import cn from 'classnames'

interface CardI {
	className?: string
}

const Card = ({ className = '' }: CardI) => {
	return <div className={cn(className, styles.Card)}>card</div>
}

export default Card
