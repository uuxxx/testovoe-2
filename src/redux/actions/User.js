import {
  CHANGE_EMAIL, CHANGE_NAME, CHANGE_USERNAME, CHANGE_WEBSITE, SET_ALL,
} from 'redux/constants/User';

export const changeName = (name) => ({
  type: CHANGE_NAME,
  payload: name,
});

export const changeUsername = (username) => ({
  type: CHANGE_USERNAME,
  payload: username,
});

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  payload: email,
});

export const changeWebsite = (website) => ({
  type: CHANGE_WEBSITE,
  payload: website,
});

export const setAll = (state) => ({
  type: SET_ALL,
  payload: state,
});
