import cls from './settings.module.scss'

export type colorType = 'default' | 'white' | 'red' | 'grey' | 'green'

export const colorClsMapper: Record<colorType, string> = {
  default: cls.default,
  white: cls.white,
  red: cls.red,
  grey: cls.grey,
  green: cls.green,
}