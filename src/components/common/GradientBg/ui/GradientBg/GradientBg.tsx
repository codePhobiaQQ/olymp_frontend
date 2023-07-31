import cn from 'classnames'
import cls from './GradientBg.module.css'
import { useEffect, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-var-requires
// import scriptGradient from './../../model/script/gradient.js'

interface GradientBgI {
	className?: string
}

const GradientBg = ({ className = '' }: GradientBgI) => {
	const [isLoad, setIsLoad] = useState<boolean>(false)

	useEffect(() => {
		const script = document.createElement('script')
		script.src = 'https://google.com'
		onload = script.onload = () => {
			// @ts-ignore
			// const gradient = new scriptGradient.Gradient()

			console.log('ehre')

			// gradient.initGradient(`#${cls.gradientCanvas}`)
			setIsLoad(true)
		}
	}, [])

	return (
		<div
			style={{
				position: 'absolute',
				top: '0',
				left: '0',
				width: '100%',
				height: '100%',
			}}
			className={cn(className)}
		>
			<div
				// style={{
				// 	background: `url('${bg.src}') repeat center center`,
				// }}
				className={cls.shum}
			></div>

			<div className={`${cls.bg} ${isLoad ? cls.hide : ''}`}></div>

			<canvas
				style={{
					width: '100%',
					height: '100%',
					position: 'absolute',
				}}
				id={cls.gradientCanvas}
			/>

			{/* <Script
				src='https://google.com'
				onLoad={() => {
					const gradient = new script.Gradient()
					gradient.initGradient(`#${cls.gradientCanvas}`)
					setIsLoad(true)
				}}
			/> */}
		</div>
	)
}

export default GradientBg
