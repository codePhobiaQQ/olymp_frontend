import cn from 'classnames'
import cls from './Title.module.scss'
import { ReactNode } from 'react'

type variantType = 'h2'

type TitleProps = {
  className?: string
  variant?: variantType
  children?: ReactNode
}

const variantsClassMapper: Record<variantType, string> = {
  h2: cls.H2,
}

export const Title = (props: TitleProps) => {
  const { className = '', variant = 'h2', children } = props
  return <div className={cn(className, cls.Title, variantsClassMapper[variant])}>{children}</div>
}
