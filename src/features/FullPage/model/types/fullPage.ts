// import { fullpageApi } from '@fullpage/react-fullpage'

export interface sectionType {
	component: React.ReactNode
	sectionId: string
	backgroundColor?: string
}

export interface fullpageType {
	origin: any
	destination: any
	direction: any
	trigger: any
}

export interface FullPageSchema {
	fullpageApi?: fullpageType
	sectionId: string
}
