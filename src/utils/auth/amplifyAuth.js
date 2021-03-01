import { Auth } from 'aws-amplify';
import store from '../../store/store';
import { setAuth } from '../../store/modules/user/actions';

export async function cognitoAuth() {
  try {
    const currentSession = await Auth.currentSession();
    const tokenUpdated = currentSession.getAccessToken().getJwtToken();
    localStorage.setItem('accessToken', tokenUpdated);
    store.dispatch(setAuth(true));
  } catch (err) {
    console.error(err);
    store.dispatch(setAuth(false));
  }
}
