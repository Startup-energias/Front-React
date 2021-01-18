import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Lazy loading optimization
import { lazy, Suspense } from 'react';
const Index = lazy(() => import('../views/Index'));
const HelpNow = lazy(() => import('../views/HelpNow'));

const indexRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch >
        <Route path="/help" component={HelpNow} />
        <Route path="/" component={Index} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default indexRouter;
