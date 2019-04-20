import { useState, useEffect } from 'react';

import { APP_ID } from '../constants/main';

export const useGeolocationUrl = (units, dependencies) => {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${units}&appid=${APP_ID}`;
        setUrl(url);
      });
    }
  }, dependencies);

  return [url];
};
