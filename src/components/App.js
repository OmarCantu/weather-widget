import React from 'react';

import Widget from './widget/Widget';
import WidgetEditor from './widgetEditor/WidgetEditor';

import styles from './App.scss';

const App = props => {
  
  return (
    <div>
      <WidgetEditor />
      <div className={styles.header}>hihiihh</div>
      <Widget />
    </div>
  );
}

export default App;
