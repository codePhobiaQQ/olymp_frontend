import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru'

export const normalizeDate = (date: string) => {
  return format(parseISO(date), 'd MMMM yyyy', { locale: ru });
}