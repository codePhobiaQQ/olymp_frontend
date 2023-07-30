import actionCard1 from './../components/shared/assets/images/actions/actionCard1.jpg'
import { MainPageTMP } from '@/components/pages'
import { RouteProps } from 'react-router-dom'

// -------------------------
// ------ Core routes ------
// -------------------------

export enum AppRoutes {
	Main = 'main',
	News = 'news',
	OnlineStudy = 'online',
	OlympSchedule = 'olymp-schedule',
	FAQ = 'faq',
	UNIVERSITY_REGISTRATION = 'university-registration',
	LK = 'lk',
}

export const routePath: Record<AppRoutes, string> = {
	[AppRoutes.Main]: '/',
	[AppRoutes.News]: '/news',
	[AppRoutes.OnlineStudy]: '/online-study',
	[AppRoutes.OlympSchedule]: '/online-study',
	[AppRoutes.FAQ]: '/faq',
	[AppRoutes.UNIVERSITY_REGISTRATION]: '/university-registration',
	[AppRoutes.LK]: '/lk',
}

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean
} & {
	label?: string
}

type RoutesType = Record<AppRoutes, AppRoutesProps>

export const routeConfig: RoutesType = {
	[AppRoutes.Main]: {
		label: 'Главная',
		path: routePath[AppRoutes.Main],
		element: MainPageTMP(),
	},
	[AppRoutes.News]: {
		label: 'Новости',
		path: routePath[AppRoutes.News],
	},
	[AppRoutes.OnlineStudy]: {
		label: 'Онлайн обучение',
		path: routePath[AppRoutes.OnlineStudy],
	},
	[AppRoutes.OlympSchedule]: {
		label: 'Онлайн обучение',
		path: routePath[AppRoutes.OlympSchedule],
	},
	[AppRoutes.FAQ]: {
		path: routePath[AppRoutes.FAQ],
		label: undefined,
	},
	[AppRoutes.UNIVERSITY_REGISTRATION]: {
		path: routePath[AppRoutes.UNIVERSITY_REGISTRATION],
		label: undefined,
	},
	[AppRoutes.LK]: {
		path: routePath[AppRoutes.LK],
		label: undefined,
	},
}

// -------------------------
// ----- Action screen -----
// -------------------------

export type RouteActionScreenAttributes = AppRoutesProps & {
	title?: string
	description?: string
	image?: string
}

export type RoutesActionScreenType = Partial<Record<AppRoutes, RouteActionScreenAttributes>>

export const routesActionScreen: RoutesActionScreenType = {
	[AppRoutes.News]: {
		...routeConfig[AppRoutes.News],
		id: '1',
		title: 'Новости',
		description: 'Самая актуальная информация о мероприятиях, проводимых порталом v-olymp.ru',
		image: actionCard1,
	},
	[AppRoutes.OnlineStudy]: {
		...routeConfig[AppRoutes.OnlineStudy],
		id: '2',
		title: 'Онлайн-обучение',
		description:
			'В данном разделе представлены материалы для подготовки к олимпиаде,  а также сдачи вступительных испытаний',
		image: actionCard1,
	},
	[AppRoutes.OlympSchedule]: {
		...routeConfig[AppRoutes.OlympSchedule],
		id: '3',
		title: 'РАСПИСАНИЕ ОЛИМПИАД',
		description: 'Следите за обновлениями данного раздела, чтобы не пропустить важные мероприятия',
		image: actionCard1,
	},
	[AppRoutes.FAQ]: {
		...routeConfig[AppRoutes.FAQ],
		id: '4',
		title: 'частозадаваемые вопросы',
		description: 'Самая актуальная информация о мероприятиях, проводимых порталом v-olymp.ru',
		image: actionCard1,
	},
	[AppRoutes.UNIVERSITY_REGISTRATION]: {
		...routeConfig[AppRoutes.UNIVERSITY_REGISTRATION],
		id: '5',
		title: 'регистрация для вузов',
		description:
			'Если вы являетесь представителем ВУЗа и у Вас есть желание проводить олимпиады на базе Вашего учебного заведения',
		image: actionCard1,
	},
	[AppRoutes.LK]: {
		...routeConfig[AppRoutes.LK],
		id: '6',
		title: 'личный кабинет',
		description: 'В этом разделе будут представлена',
		image: actionCard1,
	},
}
