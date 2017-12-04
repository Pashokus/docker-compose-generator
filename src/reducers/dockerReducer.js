import uuidv4 from 'uuid/v4';
import { ADD_DOCKER_ITEM, DELETE_DOCKER_ITEM } from '../actions/types';

export default function (state = { items: {} }, action) {
    switch (action.type) {
        case ADD_DOCKER_ITEM: {
            const items = Object.assign({}, state.items);
            const id = uuidv4();
            items[id] = action.payload;
            return Object.assign({}, ...state, { items });
        }
        case DELETE_DOCKER_ITEM: {
            const itemToDelete = action.payload;
            const items = Object.assign({}, state.items);
            delete items[itemToDelete];
            return Object.assign({}, state, { items });
        }
        default: {
            return state;
        }
    }
}
