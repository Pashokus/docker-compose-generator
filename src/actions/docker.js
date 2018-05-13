import axios from './axios';
import {
    ADD_DOCKER_ITEM,
    DELETE_DOCKER_ITEM,
    SET_CREATION_LINK_STATUS,
    USER,
    CLEAR_ITEMS,
    GENERATED_FILE
} from './types';
import { setLoadingStatus } from './index';
import json2yaml from 'yamljs';

export const addDockerInstance = (data) => {
    return {
        type: ADD_DOCKER_ITEM,
        payload: data
    };
};

export const deleteDockerItem = (itemId) => {
    return {
        type: DELETE_DOCKER_ITEM,
        payload: itemId
    };
};

export const save = (config) => {
    return (dispatch) => {
        return axios.post('/configList', config, {
            headers: {
                authorization: sessionStorage.getItem('token')
            }
        }).then((response) => {
            dispatch({ type: CLEAR_ITEMS });
            dispatch({ type: USER, payload: response.data.user });
        });
    }
};

export const generateConfig = (config) => {
    return (dispatch) => {
        const keys = Object.getOwnPropertyNames(config);

        const configToConvert = keys.reduce((prev, curr) => {
            const el = Object.assign({}, config[curr]);
            const name = el.name;

            delete el.name;

            prev[name] = el;

            return prev;
        }, {});

        const file = json2yaml.stringify(configToConvert);
        dispatch({ type: GENERATED_FILE, payload: file });
    };
};

const setCreatingLinkStatus = (value) => {
    return {
        type: SET_CREATION_LINK_STATUS,
        payload: value
    };
};
