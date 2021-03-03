import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NonAutScreen from '../components/shared/NonAuth';

// The component should be rendered with upperCase to avoid bugs
function PrivateRoute({ auth, component: Component, ...rest }) {
  return <Route {...rest} render={() => (auth ? <Component /> : <NonAutScreen />)} />;
}

const mapStateToProps = (state) => ({
  auth: state.user.auth,
});

export default connect(mapStateToProps, null)(PrivateRoute);
