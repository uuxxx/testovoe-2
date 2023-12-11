import {
  SIGNIN,
  AUTHENTICATED,
  SIGNOUT,
  SIGNOUT_SUCCESS,
  SHOW_AUTH_MESSAGE,
  HIDE_AUTH_MESSAGE,
  SIGNUP,
  SIGNUP_SUCCESS,
  SHOW_LOADING,
  SIGNIN_WITH_GOOGLE,
  SIGNIN_WITH_GOOGLE_AUTHENTICATED,
  SIGNIN_WITH_FACEBOOK,
  SIGNIN_WITH_FACEBOOK_AUTHENTICATED,
} from '../constants/Auth';

export const signIn = (user) => ({
  type: SIGNIN,
  payload: user,
});

export const authenticated = (token) => ({
  type: AUTHENTICATED,
  token,
});

export const signOut = () => ({
  type: SIGNOUT,
});

export const signOutSuccess = () => ({
  type: SIGNOUT_SUCCESS,
});

export const signUp = (user) => ({
  type: SIGNUP,
  payload: user,
});

export const signUpSuccess = (token) => ({
  type: SIGNUP_SUCCESS,
  token,
});

export const signInWithGoogle = () => ({
  type: SIGNIN_WITH_GOOGLE,
});

export const signInWithGoogleAuthenticated = (token) => ({
  type: SIGNIN_WITH_GOOGLE_AUTHENTICATED,
  token,
});

export const signInWithFacebook = () => ({
  type: SIGNIN_WITH_FACEBOOK,
});

export const signInWithFacebookAuthenticated = (token) => ({
  type: SIGNIN_WITH_FACEBOOK_AUTHENTICATED,
  token,
});

export const showAuthMessage = (message) => ({
  type: SHOW_AUTH_MESSAGE,
  message,
});

export const hideAuthMessage = () => ({
  type: HIDE_AUTH_MESSAGE,
});

export const showLoading = () => ({
  type: SHOW_LOADING,
});
