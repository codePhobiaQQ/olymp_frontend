import Vk from '@/components/shared/assets/svg/messengers/VK.svg'
import Telegram from '@/components/shared/assets/svg/messengers/Telegram.svg'
import WhatsUp from '@/components/shared/assets/svg/messengers/WhatsUp.svg'

export type messengersNames = 'VK' | 'WhatsUp' | 'Telegram'

export type messengersDataType = {
	name: string
	path: string
	image: string
}

export const messengersData: Record<messengersNames, messengersDataType> = {
	VK: {
		name: 'VK',
		path: '/',
		image: Vk,
	},
	WhatsUp: {
		name: 'WhatsUp',
		path: '/',
		image: WhatsUp,
	},
	Telegram: {
		name: 'Telegram',
		path: '/',
		image: Telegram,
	},
}
