import { 
  IMPERIAL,
  METRIC
} from '../constants/main';

export const getWindDirection = deg => {
  if (isNaN(parseFloat(deg)) || isNaN(deg - 0)) {
    return 'NA';
  }

  if ((deg >= 337.5 && deg < 360) || (deg >= 0 && deg < 22.5)) {
    return 'N';
  } else if (deg >=22.5 && deg < 67.5) {
    return 'NE'
  } else if (deg >=67.5 && deg < 112.5) {
    return 'E'
  } else if (deg >=112.5 && deg < 157.5) {
    return 'SE'
  } else if (deg >=157.5 && deg < 202.5) {
    return 'S'
  } else if (deg >=202.5 && deg < 247.5) {
    return 'SW'
  } else if (deg >=247.5 && deg < 292.5) {
    return 'W'
  } else if (deg >=292.5 && deg < 337.5) {
    return 'NW'
  } else {
    return 'NA';
  }
}

export const getWindSpeed = (speed, units) => {
  if (units === METRIC) {
    const s = speed * 60 * 60 / 1000;
    return `${s} km/h`;
  } else {
    return `${speed} m/h`;
  }
}