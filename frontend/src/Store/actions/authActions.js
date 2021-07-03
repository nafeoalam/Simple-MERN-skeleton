import { AUTH_LOGIN, AUTH_REG, AUTH_LOGIN_FAILED, AUTH_REG_FAILED } from '../store-constants';
import * as api from '../../Data/index';

export const login = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);

    dispatch({ type: AUTH_LOGIN, data });

    router.push('/dashboard');
  } catch (error) {
    console.log(error)
    dispatch({ type: AUTH_LOGIN_FAILED, error });
  }
};

export const register = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);

    dispatch({ type: AUTH_REG, data });

    router.push('/dashboard');
  } catch (error) {
    console.log('error')

    //dispatch({ type: AUTH_REG_FAILED, error });
  }
};