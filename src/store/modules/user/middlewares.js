import userApi from '../../../api/userApi';
import { setUserInFo } from './actions';
import { notySuccess, notyError } from '../../../utils/notifications/notify';

export function uploadUserInfo() {
  return (dispatch) =>
    userApi
      .getUser()
      .then(({ data: { data } }) => dispatch(setUserInFo(data)))
      .catch(() => {
        notyError(' sorry, at the moment the user info could not be recovered.');
        dispatch(setUserInFo({}));
      });
}

export function updateUserInfo(userProfile) {
  return (dispatch) =>
    userApi
      .updateUser(userProfile)
      .then(({ data: { data } }) => {
        notySuccess('User updated');
        dispatch(setUserInFo(data));
      })
      .catch(() => {
        notyError(' sorry, the user could not be updated.');
        dispatch(setUserInFo({}));
      });
}
