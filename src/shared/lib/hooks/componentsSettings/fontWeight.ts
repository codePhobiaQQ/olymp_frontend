import cls from './settings.module.scss'

export type fontWeightType = 'light' | 'regular' | 'medium' | 'bold'

export const fontWeightClsMapper: Record<fontWeightType, string> = {
  light: cls.light,
  regular: cls.regular,
  medium: cls.medium,
  bold: cls.bold,
}