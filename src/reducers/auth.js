import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    USER
} from '../actions/types.js';

export default function (state = {
    authenticated: false,
}, action) {
    switch (action.type) {
        case AUTH_USER:
            return Object.assign({}, state, { error: '', authenticated: true });
        case UNAUTH_USER:
            return Object.assign({}, state, { authenticated: false });
        case AUTH_ERROR:
            return Object.assign({}, state, { error: action.payload });
        case USER:
            return Object.assign({}, state, { user: action.payload });
        default:
            return state;
    }
}
