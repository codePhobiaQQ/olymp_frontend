import cls from './settings.module.scss'

export type fontSizeType = '10' | '12' | '14' | '16' | '18' | '20' | '22' | '24' | '26'| '28'

export const fontSizeClsMapper: Record<fontSizeType, string> = {
  '10': cls.px10,
  '12': cls.px12,
  '14': cls.px14,
  '16': cls.px16,
  '18': cls.px18,
  '20': cls.px20,
  '22': cls.px22,
  '24': cls.px24,
  '26': cls.px26,
  '28': cls.px28,
}