import { ADD_DOCKER_ITEM, DELETE_DOCKER_ITEM } from './types';

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

