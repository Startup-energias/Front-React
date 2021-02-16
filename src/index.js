import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router';
import 'font-awesome/css/font-awesome.css';
import './assets/scss/base.scss';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
import { Auth } from 'aws-amplify';
import { Provider } from 'react-redux';
import store from './store/store';
import { setAuth } from './store/modules/user/actions';
require('dotenv').config();

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router />
      </Provider>
    </React.StrictMode>
  );
};

Auth.currentAuthenticatedUser()
  .then((user) => {
    console.log(user);
    store.dispatch(setAuth(true));
  })
  .catch(() => store.dispatch(setAuth(false)));

ReactDOM.render(<App />, document.getElementById('root'));
