export type olympNames =
	| 'Криптография'
	| 'Иностранный язык'
	| 'Русский язык'
	| 'Физика'
	| 'Информатика'
	| 'Математика'
	| 'Обществознание'

export type olymDataType = {
	name: string
	path: string
}

export const olympData: Record<olympNames, olymDataType> = {
	Криптография: {
		name: 'Криптография',
		path: '/',
	},
	'Иностранный язык': {
		name: 'Иностранный язык',
		path: '/',
	},
	'Русский язык': {
		name: 'Русский язык',
		path: '/',
	},
	Физика: {
		name: 'Физика',
		path: '/',
	},
	Информатика: {
		name: 'Информатика',
		path: '/',
	},
	Математика: {
		name: 'Математика',
		path: '/',
	},
	Обществознание: {
		name: 'Обществознание',
		path: '/',
	},
}
