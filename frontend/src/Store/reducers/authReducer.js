import { LOGOUT, AUTH_REG, AUTH_LOGIN, AUTH_REG_FAILED, AUTH_LOGIN_FAILED } from '../store-constants';

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH_REG:
        case AUTH_LOGIN:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

            return { ...state, authData: action.data };
        case LOGOUT:
            localStorage.clear();

            return { ...state, authData: null };
        case AUTH_REG_FAILED:
        case AUTH_LOGIN_FAILED:
            console.log(action, 'authReducer')
            localStorage.setItem('profile', JSON.stringify({ ...action?.error?.response?.data }));

            return { ...state, authData: action?.error?.response?.data };
        default:
            return state;
    }
};

export default authReducer;