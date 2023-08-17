import cn from 'classnames'
import cls from './GradientBg.module.css'
import { useEffect } from 'react'
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { Gradient } from './../../model/script/gradient.js'

interface GradientBgI {
  className?: string
}

export const GradientBg = ({ className = '' }: GradientBgI) => {
  useEffect(() => {
    const gradient = new Gradient()
    gradient.initGradient(`#${cls.gradientCanvas}`)
  }, [])

  return (
    <>
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
        <canvas
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
          id={cls.gradientCanvas}
        />
      </div>
    </>
  )
}
