// -------------------------
// ------ Core routes ------
// -------------------------

export enum RoutePages {
	Main = 'main',
	News = 'news',
	OnlineStudy = 'online',
	OlympSchedule = 'olymp-schedule',
	FAQ = 'faq',
	UNIVERSITY_REGISTRATION = 'university-registration',
	LK = 'lk',
}

type RouteAttributes = { path: string; label?: string }

type RoutesType = Record<RoutePages, RouteAttributes>

export const routes: RoutesType = {
	[RoutePages.Main]: {
		label: 'Главная',
		path: '/',
	},
	[RoutePages.News]: {
		label: 'Новости',
		path: '/news',
	},
	[RoutePages.OnlineStudy]: {
		label: 'Онлайн обучение',
		path: 'online-study',
	},
	[RoutePages.OlympSchedule]: {
		label: 'Онлайн обучение',
		path: 'online-study',
	},
	[RoutePages.FAQ]: {
		path: '',
		label: undefined,
	},
	[RoutePages.UNIVERSITY_REGISTRATION]: {
		path: '',
		label: undefined,
	},
	[RoutePages.LK]: {
		path: '',
		label: undefined,
	},
}

// -------------------------
// ----- Action screen -----
// -------------------------

interface RouteActionScreenAttributes extends RouteAttributes {
	id: number
	title?: string
	description?: string
}

export type RoutesActionScreenType = Partial<Record<RoutePages, RouteActionScreenAttributes>>

export const routesActionScreen: RoutesActionScreenType = {
	[RoutePages.News]: {
		...routes[RoutePages.News],
		id: 1,
		title: 'Новости',
		description: 'Самая актуальная информация о мероприятиях, проводимых порталом v-olymp.ru',
	},
	[RoutePages.OnlineStudy]: {
		...routes[RoutePages.OnlineStudy],
		id: 2,
		title: 'Онлайн-обучение',
		description:
			'В данном разделе представлены материалы для подготовки к олимпиаде,  а также сдачи вступительных испытаний',
	},
	[RoutePages.OlympSchedule]: {
		...routes[RoutePages.OlympSchedule],
		id: 3,
		title: 'РАСПИСАНИЕ ОЛИМПИАД',
		description: 'Следите за обновлениями данного раздела, чтобы не пропустить важные мероприятия',
	},
	[RoutePages.FAQ]: {
		...routes[RoutePages.FAQ],
		id: 4,
		title: 'частозадаваемые вопросы',
		description: 'Самая актуальная информация о мероприятиях, проводимых порталом v-olymp.ru',
	},
	[RoutePages.UNIVERSITY_REGISTRATION]: {
		...routes[RoutePages.UNIVERSITY_REGISTRATION],
		id: 5,
		title: 'регистрация для вузов',
		description:
			'Если вы являетесь представителем ВУЗа и у Вас есть желание проводить олимпиады на базе Вашего учебного заведения',
	},
	[RoutePages.LK]: {
		...routes[RoutePages.LK],
		id: 6,
		title: 'личный кабинет',
		description: 'В этом разделе будут представлена',
	},
}
