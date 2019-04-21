import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import Weather from '../../classes/Weather';
import { ON } from '../../constants/main';

import styles from './Widget.scss';

const Widget = props => {
  const { className, data, title, units, windOption } = props;

  useEffect(() => {
    setWeather(new Weather(data, units));
  }, [data]);

  const [weather, setWeather] = useState(new Weather(data, units), []);

  // if (isLoading) {
  //   return null;
  // }

  const componentClassName = classNames(styles.widget, className);

  return (
    <section className={componentClassName}>
      <h2>{title}</h2>

      <div>
        <img 
          alt='Weather icon' 
          className={styles.icon} 
          src={weather.iconSrc()} 
        />

        <div className={styles.details}>
          <h3 className={styles.city}>{weather.city}</h3>

          <strong className={styles.temperature}>
            {weather.formattedTemp()}
          </strong>

          {windOption === ON && (
            <div className={styles.wind}>
              <strong className={styles['wind-word']}>Wind</strong>
              <span>{weather.wind.formattedDirection()}</span>
              <span>{weather.wind.formattedSpeed()}</span>
            </div>
          )}
        </div>
      </div>       
    </section>
  )
}

Widget.propTypes = {
  className: PropTypes.string, 
  data: PropTypes.object,
  title: PropTypes.string,
  units: PropTypes.string,
  windOption: PropTypes.string
};

Widget.defaultProps = {
  className: undefined,
  data: undefined,
  title: undefined,
  units: undefined,
  windOption: undefined
};

export default Widget;