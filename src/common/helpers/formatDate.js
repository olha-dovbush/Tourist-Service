import { format } from 'date-fns';

export function formatDate({ locale }) {
  const date = format(new Date(), 'do MMMM', locale);
  const splitDate = date.split(' ');
  const formatted = splitDate.splice(1, 0, 'of');
  return splitDate.join(' ');
}
