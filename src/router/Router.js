import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Lazy loading optimization
import { lazy, Suspense } from 'react';
import Footer from '../components/Footer';

const Index = lazy(() => import('../views/Index'));
const HelpNow = lazy(() => import('../views/HelpNow'));
const Project = lazy(() => import('../views/Project'));

const indexRouter = (props) => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/help" component={HelpNow} />
        <Route exact path="/projects" component={Project} />
        <Route path="/" component={Index} />
      </Switch>
      <Footer onChangeLanguage={props.onChangeLanguage}/>
    </Suspense>
  </BrowserRouter>
);

export default indexRouter;
