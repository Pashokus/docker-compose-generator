import { redirect } from 'react-router-dom';
import axios from './axios.js';
import {
    SET_LOADING_STATUS,
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    USER
} from './types.js';

const getUserFromConfig = (config) => {
    const {
        email, password, username
    } = config;
    return {
        email, password, username
    };
};

export const ssetLoadingStatus = (value) => {
    return {
        type: SET_LOADING_STATUS,
        payload: value
    };
};

export function loginError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function loginUser(config) {
    return function (dispatch) {
        const { username, password } = config;
        const user = { username, password };

        axios.post('/signin', user)
            .then((response) => {
                if (response.data.user) {
                    dispatch({ type: AUTH_USER });
                    dispatch({ type: USER, payload: response.data.user });

                    sessionStorage.setItem('token', response.data.token);

                    return redirect('/');
                }
            })
            .catch(() => {
                dispatch(loginError('Incorrect email or password'));
            });
    };
}

export function signUp(config) {
    return function (dispatch) {
        const user = getUserFromConfig(config);

        axios.post('/signup', user)
            .then((response) => {
                dispatch({ type: AUTH_USER });
                dispatch({ type: USER, payload: response.data.user });

                sessionStorage.setItem('token', response.data.token);
                browserHistory.push('/');
            })
            .catch((error) => {
                dispatch(loginError(error.response.data.error));
            });
    };
}

export function logoutUser() {
    return function (dispatch) {
        if (sessionStorage.getItem('token')) {
            dispatch({ type: UNAUTH_USER });
            sessionStorage.removeItem('token');
            dispatch({ type: USER, payload: undefined });
        }

        browserHistory.push('/');
    };
}

export function fetchUser() {
    return function (dispatch) {
        axios.get('/user', {
            headers: {
                authorization: sessionStorage.getItem('token')
            }
        }).then((response) => {
            dispatch({ type: USER, payload: response.data.user });
        }).catch(() => {
            console.log('something went wrong during getting user');
        });
    };
}
