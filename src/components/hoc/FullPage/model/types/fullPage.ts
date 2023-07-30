import { fullpageApi } from '@fullpage/react-fullpage'

export interface sectionType {
	component: React.ReactNode
	sectionId: string
	backgroundColor?: string
}

export type fullpageType = fullpageApi

export interface FullPageSchema {
	fullpageApi?: fullpageType
}
