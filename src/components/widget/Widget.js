import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Spinner from 'react-spinkit';
import classNames from 'classnames';

import Weather from '../../classes/Weather';
import { OFF } from '../../constants/main';

import styles from './Widget.scss';

const Widget = props => {
  const { className, data, isLoading, title, units, windOption } = props;

  useEffect(() => {
    setWeather(new Weather(data, units));
  }, [data]);

  const [weather, setWeather] = useState(new Weather(data, units), []);

  if (isLoading) {
    return null
  }

  const componentClassName = classNames(styles.widget, className);
  const windClassName = classNames(styles.wind, {
    [styles.hidden]: windOption === OFF
  });

  return (
    <section className={componentClassName}>
      {isLoading && (
        <div className={styles.overlay}>
          <Spinner
            className={styles.loader}
            fadeIn='none'
            name='line-spin-fade-loader'
          />
        </div>
      )}

      <h2 className={styles.title}>{title}</h2>

      <div className={styles.content}>
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

          <div className={windClassName}>
            <strong className={styles['wind-word']}>Wind</strong>

            <span className={styles['wind-direction']}>
              {weather.wind.formattedDirection()}
            </span>

            <span className={styles['wind-speed']}>
              {weather.wind.formattedSpeed()}
            </span>
          </div>
        </div>
      </div>       
    </section>
  )
}

Widget.propTypes = {
  className: PropTypes.string, 
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  units: PropTypes.string,
  windOption: PropTypes.string
};

Widget.defaultProps = {
  className: undefined,
  data: undefined,
  isLoading: true,
  title: undefined,
  units: undefined,
  windOption: undefined
};

export default Widget;