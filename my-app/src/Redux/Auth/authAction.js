

import {
    
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
   
  } from "./authActionType.js";
  
  export const loginRequest = payload => {
    return {
      type: LOGIN_REQUEST,
      payload
    };
  };

  export const loginSuccess = payload => {
    return {
      type: LOGIN_SUCCESS,
      payload
    };
  };

  export const loginFailure = payload => {
    return {
      type: LOGIN_FAILURE,
      payload
    };
  };

  export const logoutRequest = payload => {
    return {
      type: LOGOUT_REQUEST,
      payload
    };
  };

  export const logoutSuccess = payload => {
    return {
      type: LOGOUT_SUCCESS,
      payload
    };
  };
  export const logoutFailure = payload => {
    return {
      type: LOGOUT_FAILURE,
      payload
    };
  };

  export const signinRequest = () => {
    return {
      type: SIGNIN_REQUEST
    };
  };

  export const signINFailure = payload => {
    return {
      type: SIGNIN_FAILURE,
      payload
    };
  };

  export const signinSuccess = payload => {
    return {
      type: SIGNIN_SUCCESS,
      payload
    };
  };

  
  