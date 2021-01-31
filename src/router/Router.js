import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Lazy loading optimization
import { lazy, Suspense } from 'react';

const Index = lazy(() => import('../views/Index'));
const HelpNow = lazy(() => import('../views/HelpNow'));
const Project = lazy(() => import('../views/Project'));
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { indexItems } from '../helpers/constants/navbarItems';

const indexRouter = () => (
  <BrowserRouter>
    <Navbar items={indexItems} />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/help" component={HelpNow} />
        <Route exact path="/projects" component={Project} />
        <Route path="/" component={Index} />
      </Switch>
    </Suspense>
    <Footer />
  </BrowserRouter>
);

export default indexRouter;
