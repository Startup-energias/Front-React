import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Router from './router/Router';
import 'font-awesome/css/font-awesome.css';
import './assets/scss/01_vendors/_bulma.scss';
import { indexItems } from './helpers/constants/navbarItems';

import { IntlProvider } from "react-intl";
import messages_en from "./languages/en.json";
import messages_es from "./languages/es.json";

/* Define your default translations */
let langConfig = {
  locale: 'en',
  messages: messages_en
};

const App = () => (
  <IntlProvider key={ langConfig.locale } locale={ langConfig.locale }  messages={ langConfig.messages }>
    <React.StrictMode>
      <Navbar items={indexItems} />
      <Router onChangeLanguage={onChangeLanguage} />
    </React.StrictMode>
  </IntlProvider>
);

ReactDOM.render(
  <App />, document.getElementById('root'),
);

function onChangeLanguage(lang) {
  switch (lang) {
      case 'es': langConfig.messages = messages_es; break;
      case 'en': langConfig.messages = messages_en; break;
      default: langConfig.messages = messages_en; break;
  }
  console.log("changing")
  langConfig.locale = lang;
}