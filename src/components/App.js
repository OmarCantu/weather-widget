import React, { useState } from 'react';

import Widget from './widget/Widget';
import WidgetEditor from './widgetEditor/WidgetEditor';
import { 
  DEFAULT_WIDGET_TITLE,
  METRIC,
  ON
} from '../constants/main';

import styles from './App.scss';

const App = () => {
  const [units, setUnits] = useState(METRIC);
  const [title, setTitle] = useState(DEFAULT_WIDGET_TITLE);
  const [windOption, setWindOption] = useState(ON);
  
  const handleTemperatureClick = e => {
    setUnits(e.target.value);
  }

  const handleTitleChange = e => {
    setTitle(e.target.value || DEFAULT_WIDGET_TITLE)
  }

  const handleWindClick = e => {
    setWindOption(e.target.value);
  }

  return (
    <div>
      <WidgetEditor 
        units={units}
        windOption={windOption}
        onTemperatureClick={handleTemperatureClick}
        onTitleChange={handleTitleChange}
        onWindClick={handleWindClick}
      />
      
      <Widget
        units={units}
        title={title}
      />
    </div>
  );
}

export default App;
