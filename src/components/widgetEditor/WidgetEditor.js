import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import RadioButtonInput from '../radioButtonInput/RadioButtonInput';
import TextInput from '../textInput/TextInput';
import {
  DEFAULT_WIDGET_TITLE,
  IMPERIAL,
  METRIC,
  OFF,
  ON,
  TEMPERATURE,
  TITLE,
  WIND
} from '../../constants/main';

import styles from './WidgetEditor.scss';

const WidgetEditor = props => {
  const {
    className,
    onTemperatureClick,
    onTitleChange,
    onWindClick,
    units,
    windOption
  } = props;

  const submitHandler = e => {
    e.preventDefault();
  }

  const componentClassName = classNames(styles.editor, className);

  return (
    <form className={componentClassName} onSubmit={submitHandler}>
      <TextInput 
        className={styles.input}
        label={TITLE}
        name={TITLE}
        onChange={onTitleChange}
        placeholder={DEFAULT_WIDGET_TITLE}
      />

      <fieldset className={styles.units}>
        <legend className={styles.legend}>{TEMPERATURE}</legend>
        
        <ul className={styles.list}>
          <RadioButtonInput 
            checked={units === METRIC}
            label="°C"
            name={TEMPERATURE}
            onClick={onTemperatureClick}
            value={METRIC}
          />

          <RadioButtonInput 
            checked={units === IMPERIAL}
            label="°F"
            name={TEMPERATURE}
            onClick={onTemperatureClick}
            value={IMPERIAL}
          />
        </ul>
      </fieldset>

      <fieldset>
        <legend className={styles.legend}>{WIND}</legend>
        
        <ul className={styles.list}>
          <RadioButtonInput
            checked={windOption === ON}
            label={ON}
            name={WIND}
            onClick={onWindClick}
            value={ON}
          />

          <RadioButtonInput
            checked={windOption === OFF}
            label={OFF}
            name={WIND}
            onClick={onWindClick}
            value={OFF}
          />
        </ul>
      </fieldset>
    </form>
  )
}

WidgetEditor.propTypes = {
  className: PropTypes.string,
  onTemperatureClick: PropTypes.func,
  onTitleChange: PropTypes.func,
  onWindClick: PropTypes.func,
  units: PropTypes.string,
  windOption: PropTypes.string
};

WidgetEditor.defaultProps = {
  className: undefined,
  onTemperatureClick: undefined,
  onTitleChange: undefined,
  onWindClick: undefined,
  units: undefined,
  windOption: undefined
};

export default WidgetEditor;