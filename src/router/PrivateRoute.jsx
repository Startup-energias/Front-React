import { Auth } from 'aws-amplify';
import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NonAutScreen from '../components/shared/NonAuth';

function PrivateRoute({ component, ...rest }) {
  const [auth, setAuth] = useState(false);
  useEffect(async () => {
    await Auth.currentAuthenticatedUser()
      .then(() => setAuth(true))
      .catch(() => setAuth(false));
  }, []);

  return <Route {...rest} render={() => (auth ? component() : <NonAutScreen />)} />;
}

export default PrivateRoute;
