import { CardItem } from '../../screens/MainScreen/model/data'
import AppLink, { AppLinkTheme } from '../ui/AppLink/AppLink'
import Title, { TitleTheme } from '../ui/Titles/Title'
import styles from './Card.module.css'
import cn from 'classnames'

export enum CardTheme {
	BLUR_THEME = 'blur_theme',
	DEFAULT_THEME = 'default_theme',
}

interface CardI<T extends CardTheme> {
	className?: string
	theme?: T
	data?: CardItem
}

const Card = <T extends CardTheme = CardTheme.DEFAULT_THEME>({ className = '', theme, data }: CardI<T>) => {
	if (theme == CardTheme.BLUR_THEME) {
		return (
			<div className={cn(className, styles.Card, styles[theme])}>
				<Title theme={TitleTheme.H4_THIN} className={cn(styles.CardTitle, 'ttu')} text={data?.title} />

				<ul>
					{data?.links?.map((link, index) => (
						<li key={index + 'link' + link.path}>
							<AppLink text={link.text} to={link.path} theme={AppLinkTheme.LINK_WITH_ARROW} />
						</li>
					))}
				</ul>
			</div>
		)
	}

	if (theme == CardTheme.DEFAULT_THEME) {
		return (
			<div className={cn(className, styles.Card, styles[theme])}>
				<Title theme={TitleTheme.H4_THIN} className={cn(styles.CardTitle, 'ttu')} text={data?.title} />
			</div>
		)
	}
}

export default Card
