import PropTypes from 'prop-types';
import React, { Component } from 'react';
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

class WidgetEditor extends Component {
  static propTypes = {
    className: PropTypes.string,
    onTemperatureClick: PropTypes.func,
    onTitleChange: PropTypes.func,
    onWindClick: PropTypes.func,
    units: PropTypes.string,
    windOption: PropTypes.string
  };

  static defaultProps = {
    className: undefined,
    onTemperatureClick: undefined,
    onTitleChange: undefined,
    onWindClick: undefined,
    units: undefined,
    windOption: undefined
  };

  constructor(props) {
    super(props);
    this.textInput = React.createRef(); // Necessary to blur after Enter
  }

  /**
  * Prevent re-loading of page after Enter on text input, 
  * then trigger blur.
  */ 
  submitHandler = e => {
    e.preventDefault();
    this.textInput.current.blurTextInput();
  }

  render () {
    const {
      className,
      onTemperatureClick,
      onTitleChange,
      onWindClick,
      units,
      windOption
    } = this.props;  

    const componentClassName = classNames(styles.editor, className);

    return (
      <form className={componentClassName} onSubmit={this.submitHandler}>
        <TextInput
          ref={this.textInput}
          className={styles.input}
          label={TITLE}
          name={TITLE}
          onChange={onTitleChange}
          placeholder={DEFAULT_WIDGET_TITLE}
        />

        <fieldset className={styles.units}>
          <legend 
            className={styles.legend}
            id='units-label'
          >
            {TEMPERATURE}
          </legend>
          
          <ul 
            aria-labelledby='units-label'
            className={styles.list} 
            role='radiogroup'
          >
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
          <legend 
            className={styles.legend} 
            id='wind-label'
          >
            {WIND}
          </legend>
          
          <ul 
            aria-labelledby='wind-label'
            className={styles.list} 
            role='radiogroup'
          >
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
}

export default WidgetEditor;
