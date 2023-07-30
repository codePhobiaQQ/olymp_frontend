/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RouteActionScreenAttributes } from '@/core/routes/routes'
import { CardItem } from '../../screens/MainScreen/model/data'
// import AppImage from '../ui/AppImage/AppImage'
import AppLink, { AppLinkTheme } from '../ui/AppLink/AppLink'
import Title, { TitleTheme } from '../ui/Titles/Title'
import cls from './Card.module.css'
import cn from 'classnames'

export enum CardTheme {
	BLUR_THEME = 'blur_theme',
	DEFAULT_THEME = 'default_theme',
}

type dataType<T extends CardTheme> = T extends CardTheme.BLUR_THEME
	? CardItem
	: T extends CardTheme.DEFAULT_THEME
	? RouteActionScreenAttributes
	: any

interface CardI<T extends CardTheme> {
	className?: string
	theme?: T
	data?: dataType<T>
}

const Card = <T extends CardTheme = CardTheme.DEFAULT_THEME>(props: CardI<T>) => {
	const { className = '', theme, data } = props

	if (theme == CardTheme.BLUR_THEME) {
		console.log(data)

		return (
			<div className={cn(className, cls.Card, cls[theme])}>
				<Title theme={TitleTheme.H4_THIN} className={cn(cls.CardTitle, 'ttu')} text={data?.title} />
				<ul>
					{/* @ts-ignore */}
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
			<div className={cn(className, cls.Card, cls[theme])}>
				{/* <div className={cls.bg}>{data?.image && <AppImage src={data.image} />}</div>
				<Title theme={TitleTheme.H4_THIN} className={cn(cls.CardTitle, 'ttu')} text={data?.title} /> */}
			</div>
		)
	}
}

export default Card
