import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    USER
} from '../actions/types';

export default function (state = {
    authenticated: false,
}, action) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true };
        case UNAUTH_USER:
            return { ...state, authenticated: false };
        case AUTH_ERROR:
            return { ...state, error: action.payload };
        case USER:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}
