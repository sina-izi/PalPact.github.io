import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './App.css'; // Replace global.css with App.css

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
