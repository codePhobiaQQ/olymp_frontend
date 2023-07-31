export type organisatorsNames = 'Acados' | 'SPB_P_U' | 'ITMO' | 'DVU'

export type organisatorData = {
	name: string
}

export const organisatorsData: Partial<Record<organisatorsNames, organisatorData>> = {
	Acados: {
		name: 'Академия ФСБ России ',
	},
	SPB_P_U: {
		name: 'Санкт-Петербургский политехнический университет ',
	},
	ITMO: {
		name: 'Национальный исследовательский университет ИТМО',
	},
	DVU: {
		name: 'Дальневосточный федеральный университет ',
	},
}
