import PropTypes from 'prop-types';
import React, { useState } from 'react';
import classNames from 'classnames';

import RadioButtonInput from '../radioButtonInput/RadioButtonInput';
import { 
  CELSIUS, 
  FAHRENHEIT, 
  OFF, 
  ON, 
  TEMPERATURE, 
  WIND
} from '../../constants/main';

import styles from './WidgetEditor.scss';

const WidgetEditor = props => {
  const [temperatureScale, setTemperatureScale] = useState(CELSIUS);
  const [windOption, setWindOption] = useState(ON);

  const { className } = props;
  const cn = classNames(styles.editor, className);

  return (
    <form className={cn}>
      <fieldset>
        <legend>{TEMPERATURE}</legend>
        
        <RadioButtonInput 
          checked={temperatureScale === CELSIUS}
          label="°C"
          name={TEMPERATURE}
          value={CELSIUS}
        />

        <RadioButtonInput 
          checked={temperatureScale === FAHRENHEIT}
          label="°F"
          name={TEMPERATURE}
          value={FAHRENHEIT}
        />
      </fieldset>

      <fieldset>
        <legend>{WIND}</legend>
        
        <RadioButtonInput 
          checked={windOption === ON}
          label={ON}
          name={WIND}
          value={ON}
        />

        <RadioButtonInput 
          checked={windOption === OFF}
          label={OFF}
          name={WIND}
          value={OFF}
        />
      </fieldset>
    </form>
  )
}

WidgetEditor.propTypes = {
  className: PropTypes.string
};

WidgetEditor.defaultProps = {
  className: undefined
};

export default WidgetEditor;