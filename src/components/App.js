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
    <div className={styles.container}>
      <div className={styles.line} />

      <div className={styles.app}>
        <WidgetEditor 
          className={styles.editor}
          onTemperatureClick={handleTemperatureClick}
          onTitleChange={handleTitleChange}
          onWindClick={handleWindClick}
          units={units}
          windOption={windOption}
        />

        <div className={styles.divider} />
        
        <Widget
          className={styles.widget}
          data={fetchedData}
          isLoading={isLoading}
          title={title}
          units={units}
          windOption={windOption}
        />
      </div>
    </div>
  );
}

export default App;
