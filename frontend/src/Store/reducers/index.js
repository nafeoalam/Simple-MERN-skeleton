import { combineReducers } from 'redux';

import photoReducer from './dashboardReducer';
import authReducer from './authReducer';
// import dishes from './dashboard';
// import dishes from './dashboard';

export const reducers = combineReducers({ photoReducer, authReducer });