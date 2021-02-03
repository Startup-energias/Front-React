import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router';
import 'font-awesome/css/font-awesome.css';
import './assets/scss/base.scss';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
import { Auth } from 'aws-amplify';
require('dotenv').config();

const App = () => {
  return (
    <React.StrictMode>
      <Router />
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
