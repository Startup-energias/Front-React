
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Router from './router/Router';
import 'font-awesome/css/font-awesome.css';
import './assets/scss/base.scss';
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
