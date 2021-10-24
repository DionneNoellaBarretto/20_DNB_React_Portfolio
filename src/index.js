import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  // https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage

//   StrictMode currently helps with:

// Identifying components with unsafe lifecycles
// Warning about legacy string ref API usage
// Warning about deprecated findDOMNode usage
// Detecting unexpected side effects
// Detecting legacy context API

  <React.StrictMode>
  <Router>
    <App />
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

