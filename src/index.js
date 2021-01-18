import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Router from './router/Router';
import 'bulma';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);
