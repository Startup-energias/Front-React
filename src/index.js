import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router';
import 'font-awesome/css/font-awesome.css';
import './assets/scss/base.scss';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
import { cognitoAuth } from './utils/auth/amplifyAuth';
import { Provider } from 'react-redux';
import store from './store/store';
import 'noty/lib/noty.css';
import 'noty/lib/themes/nest.css';
import { initialize } from './utils/tagManager/dataLayer';

require('dotenv').config();

cognitoAuth();

initialize();

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router />
      </Provider>
    </React.StrictMode>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
