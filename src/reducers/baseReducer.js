import { SET_LOADING_STATUS } from '../actions/types.js';

export default function (state = { loading: false }, action) {
    switch (action.type) {
        case SET_LOADING_STATUS: {
            return Object.assign({}, state, { loading: action.payload });
        }
        default: {
            return state;
        }
    }
}
