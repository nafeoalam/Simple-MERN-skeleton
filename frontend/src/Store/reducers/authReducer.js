import { LOGOUT, AUTH_REG, AUTH_LOGIN } from '../store-constants';

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH_REG:
        case AUTH_LOGIN:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

            return { ...state, authData: action.data };
        case LOGOUT:
            localStorage.clear();

            return { ...state, authData: null };
        default:
            return state;
    }
};

export default authReducer;