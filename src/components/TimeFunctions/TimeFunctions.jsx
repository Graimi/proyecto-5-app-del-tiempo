import moment from 'moment';
import 'moment/locale/es';

// Creamos la función para obtener la fecha, nos ayudamos de la biblioteca moment
export function date(timestamp) {
  return moment.unix(timestamp).format('DD/MM/YY');
}

// Creamos la función para obtener la hora, nos ayudamos de la biblioteca moment
export function day(timestamp) {
  moment.locale('es');
  return moment.unix(timestamp).format('dddd');
}

// Creamos la función para obtener la hora, nos ayudamos de la biblioteca moment
export function hour(timestamp) {
  return moment.unix(timestamp).format('HH:mm');
}
