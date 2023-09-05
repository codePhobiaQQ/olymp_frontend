import { OlympSchema } from '@entities/Olymp'

export enum OlympDetailsMenuItems {
  NEWS = 'Новости',
  OF_INFO = 'Официальная информация',
  TIME_PLACE = 'Сроки и места проведения',
  PREPARE = 'Подготовка к олимпиаде',
  ARCHIVE = 'Архив задач',
  PREV_TASKS = 'Задачи прошлых лет',
  RESULTS = 'Результаты',
  PARTNERS = 'Организаторы и партнеры',
  ABOUT = 'О олимпиаде',
}

export interface OlympDetailsSchema {
  data?: OlympSchema
  isLoading: boolean
  error?: string
}
