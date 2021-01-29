/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Router from './router/Router';
import Footer from './components/utils/Footer';
import 'font-awesome/css/font-awesome.css';
import './assets/scss/01_vendors/_bulma.scss';
import { indexItems } from './helpers/constants/navbarItems';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
import { Auth } from 'aws-amplify';

const App = () => {
  return (
    <React.StrictMode>
      <Navbar items={indexItems} />
      <Router />
      <Footer />
    </React.StrictMode>
  );
};

function checkUser() {
  Auth.currentAuthenticatedUser()
    .then((user) => console.log({ user }))
    .catch((err) => console.error(err));
}
checkUser();
ReactDOM.render(<App />, document.getElementById('root'));
