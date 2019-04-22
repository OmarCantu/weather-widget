import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import Weather from '../../classes/Weather';
import { OFF } from '../../constants/main';

import styles from './Widget.scss';

const Widget = props => {
  const { className, data, title, units, windOption } = props;

  useEffect(() => {
    setWeather(new Weather(data, units));
  }, [data]);

  const [weather, setWeather] = useState(new Weather(data, units), []);

  const componentClassName = classNames(styles.widget, className);
  const windClassName = classNames(styles.wind, {
    [styles.hidden]: windOption === OFF
  });

  return (
    <section className={componentClassName}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.content}>
        <img 
          alt={weather.description()} 
          className={styles.icon} 
          role='presentation'
          src={weather.iconSrc()} 
          title={weather.description()} 
        />

        <div className={styles.details}>
          <h3 className={styles.city}>{weather.city}</h3>

          <strong className={styles.temperature}>
            {weather.formattedTemp()}
          </strong>

          <div 
            aria-hidden={windOption === OFF}
            className={windClassName}
          >
            <label 
              className={styles['wind-word']}
              htmlFor='wind-details'
            >
              Wind
            </label>

            <div id='wind-details'>
              <span className={styles['wind-direction']}>
                {weather.wind.formattedDirection()}
              </span>

              <span className={styles['wind-speed']}>
                {weather.wind.formattedSpeed()}
              </span>
            </div>
          </div>
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