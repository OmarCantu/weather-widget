import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import styles from './RadioButtonInput.scss';

const RadioButtonInput = props => {
  const { checked, className, label, name, value } = props;

  const componentClassName = classNames(styles.component, className);
  
  const iconClassName = classNames(styles.icon, {
    [styles.checked]: checked
  });

  return (
    <div className={componentClassName}>
      <span className={iconClassName}></span>

      <input
        className={styles.input}
        id={value} 
        name={name}
        value={value} 
        type="radio" 
      />

      <label className={styles.label} htmlFor={value}>{label}</label>
    </div>
  )
}

RadioButtonInput.propTypes = {
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
};

RadioButtonInput.defaultProps = {
  className: undefined,
  label: undefined,
  name: undefined,
  value: undefined
};

export default RadioButtonInput;