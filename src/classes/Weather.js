import { DEFAULT_WEATHER_OBJECT } from '../constants/dummyData';

import Wind from './Wind';

class Weather {
  constructor(weatherObj, units) {
    const { 
      name: city, 
      main: { temp }, 
      weather: wthr,
      wind
    } = weatherObj || DEFAULT_WEATHER_OBJECT;

    this._city = city;
    this._temp = temp;
    this._wthr = wthr;
    this._wind = new Wind(wind, units);
  }

  get city() {
    return this._city;
  }

  set city(city) {
    this._city = city;
  }

  get temp() {
    return this._temp;
  }

  set temp(temp) {
    this._temp = temp;
  }

  get wthr() {
    return this._wthr;
  }

  set wthr(wthr) {
    this._wthr = wthr;
  }

  get wind() {
    return this._wind;
  }

  set wind(wind) {
    this._wind = new Wind(wind);
  }

  iconSrc() {
    const { icon } = this._wthr[0];
    const iconSrc = `http://openweathermap.org/img/w/${icon}.png` 
      || '../static/images/placeholder.png';

    return iconSrc;
  }

  formattedTemp() {
    const t = Math.round(this._temp)    
    return `${t}°`;
  }
}

export default Weather;
         
