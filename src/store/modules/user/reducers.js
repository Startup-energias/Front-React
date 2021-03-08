import types from './types';
import { userModel } from '../../../helpers/constants/userModel';

const INITIAL_STATE = {
  auth: false,
  userInfo: {
    ...userModel,
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.setAuth:
      return { ...state, auth: action.payload };
    case types.setUserInfo:
      return { ...state, userInfo: { ...state.userInfo, ...action.payload } };
    case types.setUserImage:
      return { ...state, userInfo: { ...state.userInfo, profile_img: action.payload } };
    default:
      return state;
  }
};

export default reducer;
