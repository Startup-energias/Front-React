import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Router from './router/Router';
import 'font-awesome/css/font-awesome.css';
import './assets/scss/01_vendors/_bulma.scss';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);
