import Vk from '@/components/shared/assets/svg/messengers/VK.svg'
import Telegram from '@/components/shared/assets/svg/messengers/Telegram.svg'
import WhatsUp from '@/components/shared/assets/svg/messengers/WhatsUp.svg'

export type otherEventsNames =
	| 'Олимпиада по русскому языку'
	| 'Математическая олимпиада для кадет'
	| 'Конкурсы проектов'

export type messengersDataType = {
	name: string
	path: string
}

export const otherEventsData: Record<otherEventsNames, messengersDataType> = {
	'Олимпиада по русскому языку': {
		name: 'Олимпиада по русскому языку',
		path: '/',
	},
	'Математическая олимпиада для кадет': {
		name: 'Математическая олимпиада для кадет',
		path: '/',
	},
	'Конкурсы проектов': {
		name: 'Конкурсы проектов',
		path: '/',
	},
}
