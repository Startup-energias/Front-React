import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import './scss/_nonAuth.scss';

function NonAuthScreen() {
  return (
    <div className="nonAuth">
      <h1 className="has-text-white is-size-1">
        Sorry, you must be logged in to use this application.
      </h1>
      <div className="nonAuth__actions">
        <button
          onClick={() => {
            Auth.federatedSignIn();
          }}
          className="button is-primary has-text-weight-bold"
        >
          Signin / signup
        </button>
        <Link className="button is-info" to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default NonAuthScreen;
