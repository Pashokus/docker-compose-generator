import { v4 as uuidv4 } from 'uuid';
import { ADD_DOCKER_ITEM, CLEAR_ITEMS, DELETE_DOCKER_ITEM, GENERATED_FILE } from '../actions/types.js';

export default function (state = { items: {} }, action) {
    console.log(state);

    switch (action.type) {
        case ADD_DOCKER_ITEM: {
            const items = Object.assign({}, state.items);
            const id = uuidv4();
            items[id] = action.payload;
            return Object.assign({}, state, { items });
        }
        case DELETE_DOCKER_ITEM: {
            const itemToDelete = action.payload;
            const items = Object.assign({}, state.items);
            delete items[itemToDelete];
            return Object.assign({}, state, { items });
        }
        case CLEAR_ITEMS: {
            return Object.assign({}, state, { items: {} });
        }
        case GENERATED_FILE: {
            return Object.assign({}, state, { file: action.payload })
        }
        default: {
            return state;
        }
    }
}
