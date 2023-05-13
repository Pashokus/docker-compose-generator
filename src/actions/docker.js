import axios from './axios.js';
import {
    ADD_DOCKER_ITEM,
    DELETE_DOCKER_ITEM,
    SET_CREATION_LINK_STATUS,
    USER,
    CLEAR_ITEMS,
    GENERATED_FILE
} from './types.js';
import { stringify } from 'yaml'

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
        	  const {
        	  	ports,
		          volumes,
		          volumes_from
	          } = config[curr];

        	  let arrays = {};

        	  if (ports) {
        	  	arrays.ports = ports.split(',');
	          }

		        if (volumes) {
			        arrays.volumes = volumes.split(',');
		        }

		        if (volumes_from) {
			        arrays.volumes_from = volumes_from.split(',');
		        }

            const el = Object.assign({}, config[curr], arrays);
            const name = el.name;

            delete el.name;

            prev.services[name] = el;

            return prev;
        }, { services: {} });

        const file = stringify(configToConvert, 4);
        dispatch({ type: GENERATED_FILE, payload: file });
    };
};

const setCreatingLinkStatus = (value) => {
    return {
        type: SET_CREATION_LINK_STATUS,
        payload: value
    };
};
