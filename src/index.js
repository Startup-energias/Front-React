/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Router from './router/Router';
import Footer from './components/utils/Footer';
import 'font-awesome/css/font-awesome.css';
import './assets/scss/01_vendors/_bulma.scss';
import { indexItems } from './helpers/constants/navbarItems';
import { IntlProvider } from "react-intl";

import messages_en from "./languages/en.json";
import messages_es from "./languages/es.json";

const messages = {
  en: messages_en,
  es: messages_es
}

const defaultLocale = localStorage['locale'] ? localStorage['locale'] : 'en';

const App = () => {
  localStorage.clear();
  const [currentLocale, setCurrentLocale] = useState(defaultLocale);

  const onChangeLanguage = (e) => {
    const selectedLocale = e.target.value;
    setCurrentLocale(selectedLocale);
    localStorage.setItem('locale',selectedLocale)
  }

  const localeList = [
    { name: 'English', code: 'en', lang: 'English'},
    { name: 'Español', code: 'es', lang: 'Spanish'}
  ];

  let LangSelector = () => {
    return(
      <select onBlur={onChangeLanguage} defaultValue={currentLocale}>
        {
          localeList.map((locale,index)=>(
            <option key={index} value={locale.code}>{locale.name}</option>
          ))
        }
      </select>
    );
  }

  return(
    <IntlProvider locale={currentLocale} messages={messages[currentLocale]} >
      <React.StrictMode>
        <Navbar items={indexItems} />
        <Router />
        <Footer />
      </React.StrictMode>
    </IntlProvider>
  );
};

ReactDOM.render(
  <App />, document.getElementById('root'),
);

/*
var dropdown = document.querySelector('.dropdown');
  dropdown.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdown.classList.toggle('is-active');
  });*/


