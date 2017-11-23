import { combineReducers } from 'redux'
import docker from './dockerReducer';

const reducers = combineReducers({
    docker
});

export default reducers;
