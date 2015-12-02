import { combineReducers } from 'redux';

import auth from './auth';
import api from './api';
import userInterface from './userInterface';
import search from './search';

const rootReducer = combineReducers({ auth, api, userInterface, search })

export default rootReducer;
