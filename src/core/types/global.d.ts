type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  }
	: T

// declare module '*.svg' {
// 	import React from 'react'
// 	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
// 	export default SVG
// }

declare module '*.jpg'
