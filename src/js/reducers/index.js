import { combineReducers } from 'redux';

import auth from './auth';
import api from './api';
import userInterface from './userInterface';

const rootReducer = combineReducers({ auth, api, userInterface })

export default rootReducer;
