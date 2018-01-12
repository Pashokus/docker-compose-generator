import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import docker from './dockerReducer';
import base from './baseReducer';

const reducers = combineReducers({
    docker,
    base,
    form
});

export default reducers;
