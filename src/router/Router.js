import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Lazy loading optimization
import { lazy, Suspense } from 'react';
const Index = lazy(() => import('../views/Index'));
const HelpNow = lazy(() => import('../views/HelpNow'));
const Project = lazy(() => import('../views/Project'));

const indexRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/help" component={HelpNow} />
        <Route path="/projects" component={Project} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default indexRouter;
