import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter as Router} from 'react-router-dom';

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


// // https://javascript.plainenglish.io/everything-new-in-react-18-db459c2608de
// const container =document.getElementById("root");
// // Create a root.
// // const root = ReactDOM.unstable_createRoot(container); 
// //OR 
// const root = ReactDOM.createRoot(container);
// //provides this error: TypeError: react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unstable_createRoot is not a function 

// // Initial render
// root.render(<React.StrictMode>
//   <Router>
//     <App />
//   </Router>
//   </React.StrictMode>);