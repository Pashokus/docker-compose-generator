import axios from 'axios';
import {
    ADD_DOCKER_ITEM,
    DELETE_DOCKER_ITEM,
    SET_CREATION_LINK_STATUS
} from './types';
import { setLoadingStatus } from './index';

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

export const generateConfig = (items) => {
    return (dispatch) => {
        dispatch(setLoadingStatus(true));

        return axios.post('http://localhost:9000/api/generator', {items}).then((res) => {
            // if (res && res.data) {
            //     const { data, metadata } = res.data;
            //     const arr = new Int8Array(data.data);

            //     const file = new File([arr], metadata.name);
            //     const objUrl = URL.createObjectURL(file);

            //     console.log(objUrl);
            // }
            dispatch(setCreatingLinkStatus(true));
        }).catch((error) => {
            dispatch(setCreatingLinkStatus(false));
            console.warn(error);
        }).then(() => {
            setTimeout(() => {
                dispatch(setLoadingStatus(false));
            }, 5000);
        });
    };
};

const setCreatingLinkStatus = (value) => {
    return {
        type: SET_CREATION_LINK_STATUS,
        payload: value
    }
};
