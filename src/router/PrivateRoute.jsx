import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NonAutScreen from '../components/shared/NonAuth';

function PrivateRoute({ auth, component, ...rest }) {
  return <Route {...rest} render={() => (auth ? component() : <NonAutScreen />)} />;
}

const props = (state) => ({
  auth: state.user.auth,
});

export default connect(props, null)(PrivateRoute);
