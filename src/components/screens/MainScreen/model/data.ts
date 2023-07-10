type linkType = {
	path: string
	text: string
}

export type CardItem = {
	title?: string
	links?: linkType[]
}

export const cardsList: CardItem[] = [
	{
		title: 'Межрегиональная олимпиада школьников им. И.Я. Верченко',
		links: [
			{
				path: '/',
				text: 'криптография',
			},
			{
				path: '/',
				text: 'криптография',
			},
		],
	},
	{
		title: 'Межрегиональная олимпиада школьников на базе ведомственных образовательных организаций',
		links: [
			{
				path: '/',
				text: 'физика',
			},
			{
				path: '/',
				text: 'математика',
			},
			{
				path: '/',
				text: 'иностранный язык',
			},
			{
				path: '/',
				text: 'обществознание',
			},
		],
	},
	{
		title: 'другие олимпиады школьников',
		links: [
			{
				path: '/',
				text: 'русский язык',
			},
			{
				path: '/',
				text: 'олимпиада кадет',
			},
		],
	},
]
