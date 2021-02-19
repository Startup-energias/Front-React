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

const indexRouter = () => (
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
);

export default indexRouter;
