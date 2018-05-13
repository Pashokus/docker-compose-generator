import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import docker from './dockerReducer';
import auth from './auth';
import base from './baseReducer';

const reducers = combineReducers({
    docker,
    base,
    auth,
    form,
    routing: routerReducer
});

export default reducers;
