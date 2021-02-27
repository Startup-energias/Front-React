import types from './types';

const INITIAL_STATE = {
  auth: false,
  userInfo: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.setAuth:
      return { ...state, auth: action.payload };
    case types.setUserInfo:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

export default reducer;
