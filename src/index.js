import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

class Index extends Component {
  render() {
    return <App />
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

registerServiceWorker();
