import { IMPERIAL, METRIC } from '../constants/main';
import { isNumber } from '../util';

class Wind {
  constructor(windObj, units) {
    const { deg, speed } = windObj;
    this._degree = deg;
    this._speed = speed;
    this._units = units;
  }

  get degree() {
    return this._degree;
  }

  set degree(degree) {
    this._degree = degree;
  }

  get speed() {
    return this._speed;
  }

  set speed(speed) {
    this._speed = speed;
  }

  get units() {
    return this._units;
  }

  set units(units) {
    this._units = units;
  }

  formattedDirection() {
    const deg = this._degree;

    if (!isNumber(deg)) {
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

  formattedSpeed() {
    if (!isNumber(this._speed) 
      || (this._units !== IMPERIAL && this._units !== METRIC)) {
      return 'NA';
    }

    if (this._units === METRIC) {
      const s = Math.round(this._speed * 60 * 60 / 1000);
      return `${s} km/h`;
    } else {
      const s = Math.round(this._speed);
      return `${s} m/h`;
    }
  }
}

export default Wind;