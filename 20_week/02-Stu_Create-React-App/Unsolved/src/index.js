// TODO: Add a comment giving a brief description of what React is
import React from 'react';

// TODO: Add a comment that describes the difference between react and react-dom
// ReactDOM is the react showdow DOM
import ReactDOM from 'react-dom';

import App from './App';

// TODO: Add a comment describing the significance of the ReactDOM.render method
// ReactDOM render is going to rdender the component "App" at the element "root"
ReactDOM.render(<App />, document.getElementById('root'));
