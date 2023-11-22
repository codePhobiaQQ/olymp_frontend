import cls from './settings.module.scss'

export type textAlignType = 'left' | 'center' | 'right'

export const textAlignClsMapper: Record<textAlignType, string> = {
  left: cls.alignLeft,
  center: cls.alignCenter,
  right: cls.alignRight,
}