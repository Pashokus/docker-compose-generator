import { browserHistory } from 'react-router';
import axios from 'axios';
import {
    SET_LOADING_STATUS,
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    USER
} from './types';

const getUserFromConfig = (config) => {
    const {
        email, password, username
    } = config;
    return {
        email, password, username
    };
};

export const setLoadingStatus = (value) => {
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
        const {
            accessToken, id, email, password
        } = config;
        let user;

        if (id && accessToken) {
            user = {
                email, password: 'false', accessToken, id
            };
        } else {
            user = { email, password };
        }

        axios.post('/signin', user)
            .then((response) => {
                if (response.data.user) {
                    dispatch({ type: AUTH_USER });
                    dispatch({ type: USER, payload: response.data.user });

                    sessionStorage.setItem('token', response.data.token);

                    browserHistory.push('/');
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

export function logoutUser(isTimeout) {
    return function (dispatch) {
        if (sessionStorage.getItem('token')) {
            dispatch({ type: UNAUTH_USER });
            sessionStorage.removeItem('token');
            dispatch({ type: USER, payload: undefined });
        }

        browserHistory.push(isTimeout ? '/login' : '/');
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
