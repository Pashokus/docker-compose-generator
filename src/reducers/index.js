import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import docker from './dockerReducer.js';
import auth from './auth.js';
import base from './baseReducer.js';

const reducers = combineReducers({
    docker,
    base,
    auth,
    form,
});

export default reducers;
