import types from './types';
export const setAuth = (payload) => ({
  type: types.setAuth,
  payload,
});

export const setUserInFo = (payload) => ({
  type: types.setUserInfo,
  payload,
});

export const setUserImage = (payload) => ({
  type: types.setUserImage,
  payload,
});
