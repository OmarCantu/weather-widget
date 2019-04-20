import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { getWindDirection, getWindSpeed } from '../../util/index';
import { useFetch } from '../../hooks/fetch';
import { useGeolocationUrl } from '../../hooks/geolocationUrl';

import styles from './Widget.scss';

const Widget = props => {
  const { className, title, units } = props;
  const [url] = useGeolocationUrl(units, [units]);
  const [isLoading, fetchedData] = useFetch(url, [url]);

  if (isLoading) {
    return null;
  }

  console.log('url: ', url);
  console.log('fetchedData: ', fetchedData);

  const { 
    weather,
    name: city, 
    main: { temp }, 
    wind: { speed: windSpeed, deg: windDirection }
  } = fetchedData;

  const { icon } = weather[0];
  const src = `http://openweathermap.org/img/w/${icon}.png` 
    || '../static/images/placeholder.png';

  const componentClassName = classNames(styles.widget, className);

  return (
    <section className={componentClassName}>
      <h2>{title}</h2>

      <div>
        <img alt='Weather icon' className={styles.icon} src={src} />

        <div>
          <h3 className={styles.city}>{city}</h3>

          <strong className={styles.temperature}>{temp}°</strong>

          <div className={styles.wind}>
            <strong className={styles['wind-word']}>Wind</strong>
            <span>{getWindDirection(windDirection)}</span>
            <span>{getWindSpeed(windSpeed, units)}</span>
          </div>
        </div>
      </div>       
    </section>
  )
}

Widget.propTypes = {
  className: PropTypes.string, 
  title: PropTypes.string.isRequired
};

Widget.defaultProps = {
  className: undefined
};

export default Widget;