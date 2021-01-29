import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Router from './router/Router';
import 'font-awesome/css/font-awesome.css';
import './assets/scss/01_vendors/_bulma.scss';
import { indexItems } from './helpers/constants/navbarItems';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
import { Auth } from 'aws-amplify';

function checkUser() {
  Auth.currentAuthenticatedUser()
    .then((user) => console.log({ user }))
    .catch((err) => console.error(err));
}
checkUser();
ReactDOM.render(
  <React.StrictMode>
    <Navbar items={indexItems} />
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);
