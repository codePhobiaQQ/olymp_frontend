type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  }
	: T

type PartialRecord<K extends keyof any, T> = {
	[P in K]?: T
}

declare module '*.jpg'
