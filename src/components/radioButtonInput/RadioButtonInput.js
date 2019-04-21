import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import styles from './RadioButtonInput.scss';

const RadioButtonInput = props => {
  const { checked, className, label, name, onClick, value } = props;

  const componentClassName = classNames(styles.component, className);
  
  const iconClassName = classNames(styles.icon, {
    [styles.checked]: checked
  });

  return (
    <li className={componentClassName}>
      <span 
        aria-checked={checked} 
        className={iconClassName} 
        role='radio' 
        tabIndex={0}
      />

      <input
        className={styles.input}
        id={value} 
        name={name}
        onClick={onClick}
        value={value} 
        type="radio" 
        tabIndex={-1}
      />

      <label className={styles.label} htmlFor={value}>{label}</label>
    </li>
  )
}

RadioButtonInput.propTypes = {
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string
};

RadioButtonInput.defaultProps = {
  className: undefined,
  label: undefined,
  name: undefined,
  onClick: undefined,
  value: undefined
};

export default RadioButtonInput;