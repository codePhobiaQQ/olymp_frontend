export type heightType = '10' | '15' | '20' | '30' | '35' | '40' | '50' | '80' | '100' | '120' | 'all' | 'auto'
export type widthType = '10' | '15' | '20' | '30' | '35' | '40' | '50' | '80' | '100' | '120' | 'all' | 'auto'

export const heightClsMapper: Record<heightType, string> = {
  '10': 'h_10',
  '15': 'h_15',
  '20': 'h_20',
  '30': 'h_30',
  '35': 'h_35',
  '40': 'h_40',
  '50': 'h_50',
  '80': 'h_80',
  '100': 'h_100',
  '120': 'h_120',
  all: 'h_all',
  auto: 'h_auto',
}
export const widthClsMapper: Record<widthType, string> = {
  '10': 'w_10',
  '15': 'w_15',
  '20': 'w_20',
  '30': 'w_30',
  '35': 'w_35',
  '40': 'w_40',
  '50': 'w_50',
  '80': 'w_80',
  '100': 'w_100',
  '120': 'w_120',
  all: 'w_all',
  auto: 'w_auto',
}
