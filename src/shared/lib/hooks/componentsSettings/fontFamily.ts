import cls from './settings.module.scss';

export type fontFamilyType = 'lb' | 'mth' | 'mr' | 'mm' | 'mb' | 'msb'

export const fontFamilyClsMapper: Record<fontFamilyType, string> = {
  'lb': cls.lb,
  'mth': cls.mth,
  'mr': cls.mr,
  'mm': cls.mm,
  'mb': cls.mb,
  'msb': cls.msb
};