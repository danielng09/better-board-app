import { combineReducers } from 'redux';

import auth from './auth';
import api from './api';

const rootReducer = combineReducers({ auth, api })

export default rootReducer;
