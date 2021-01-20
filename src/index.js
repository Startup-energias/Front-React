import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Router from './router/Router';
import './assets/scss/01_vendors/_bulma.scss';
import { indexItems } from './helpers/constants/navbarItems';

ReactDOM.render(
  <React.StrictMode>
    <Navbar items={indexItems} />
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);
