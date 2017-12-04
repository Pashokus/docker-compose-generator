import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import docker from './dockerReducer';

const reducers = combineReducers({
    docker,
    form
});

export default reducers;
