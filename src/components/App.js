import React, { useState } from 'react';

import Widget from './widget/Widget';
import WidgetEditor from './widgetEditor/WidgetEditor';
import { 
  DEFAULT_WIDGET_TITLE,
  METRIC,
  ON
} from '../constants/main';
import { useFetch } from '../hooks/fetch';
import { useGeolocationUrl } from '../hooks/geolocationUrl';

import styles from './App.scss';

const App = () => {
  const [units, setUnits] = useState(METRIC);
  const [title, setTitle] = useState(DEFAULT_WIDGET_TITLE);
  const [windOption, setWindOption] = useState(ON);
  const [url] = useGeolocationUrl(units, [units]);
  const [isLoading, fetchedData] = useFetch(url, [url]);
  
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
        onTemperatureClick={handleTemperatureClick}
        onTitleChange={handleTitleChange}
        onWindClick={handleWindClick}
        units={units}
        windOption={windOption}
      />
      
      <Widget
        data={fetchedData}
        title={title}
        units={units}
        windOption={windOption}
      />
    </div>
  );
}

export default App;
