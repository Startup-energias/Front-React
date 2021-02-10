import types from './types';

const INITIAL_STATE = {
  auth: false,
  userInfo: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.setAuth:
      return { ...state, auth: action.payload };
    default:
      return state;
  }
};

export default reducer;
