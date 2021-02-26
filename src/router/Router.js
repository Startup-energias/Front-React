import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Lazy loading optimization
import { lazy, Suspense } from 'react';
const Index = lazy(() => import('../views/Index'));
const HelpNow = lazy(() => import('../views/HelpNow'));
const Payment = lazy(() => import('../views/Payment'));
const Volunteer = lazy(() => import('../views/Volunteer'));
const Project = lazy(() => import('../views/Project'));
import Profile from '../views/Profile';
const About = lazy(() => import('../views/About'));
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { indexItems } from '../helpers/constants/navbarItems';
import PrivateRoute from './PrivateRoute';

//Intl componnents
import { IntlProvider } from "react-intl";
import { FormattedMessage } from 'react-intl'
import messages_en from "../languages/en.json";
import messages_es from "../languages/es.json";

const messages = {
  es: messages_es,
  en: messages_en,
};
const language = navigator.language.split(/[-_]/)[0];

const indexRouter = () => (
  <IntlProvider locale={language} messages={messages[language]}>
    <BrowserRouter>
      <Navbar items={indexItems} />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/help" component={HelpNow} />
          <Route path="/projects/:id" component={Project} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/volunteer" component={Volunteer} />
          <Route exact path="/about" component={About} />
          <Route path="/" component={Index} />
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  </IntlProvider>
);

export default indexRouter;
