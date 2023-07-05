export type advantageData = {
	number: number
	text: string
	prevSymbol?: string
	afterSymbol?: string
}

export const advantagesData: advantageData[] = [
	{
		number: 6,
		text: 'олимпиад входят в перечень Минобрнауки',
	},
	{
		number: 1200,
		text: 'школьников участвуют в ежегодных олимпиадах   ',
		prevSymbol: '>',
	},
	{
		number: 98,
		text: 'пользователей платформы оналайн-образования успешно сдали вступительные испытания в выбранный ВУЗ',
		afterSymbol: '%',
	},
]
