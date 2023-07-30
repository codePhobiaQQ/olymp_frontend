/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RouteActionScreenAttributes } from '@/core/routes/routes'
import { CardItem } from '../../screens/MainScreen/model/data'
// import AppImage from '../ui/AppImage/AppImage'
import AppLink, { AppLinkTheme } from '../ui/AppLink/AppLink'
import Title, { TitleTheme } from '../ui/Titles/Title'
import cls from './Card.module.scss'
import cn from 'classnames'

export enum CardSizeTheme {
	S = 'S',
	M = 'M',
	X = 'X',
}

interface CardI {
	className?: string
	data: CardItem
	sizeTheme?: CardSizeTheme
}

const MainScreenCard = (props: CardI) => {
	const { className = '', data, sizeTheme = CardSizeTheme.M } = props

	return (
		<div className={cn(className, cls.MainScreenCard, cls.Card, cls[sizeTheme])}>
			<Title theme={TitleTheme.H4} className={cn(cls.CardTitle, 'ttu')} text={data?.title} />

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

export default MainScreenCard
