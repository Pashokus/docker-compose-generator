import { SET_LOADING_STATUS } from './types';

export const setLoadingStatus = (value) => {
    return {
        type: SET_LOADING_STATUS,
        payload: value
    }
};
