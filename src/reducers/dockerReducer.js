import { ADD_DOCKER_ITEM } from '../actions/types';

export default function (state = { items: [] }, action) {
    switch (action.type) {
        case ADD_DOCKER_ITEM:
            const items = state.items.slice();
            items.push(`Docker instance ${items.length}`);
            return Object.assign({}, state, { items });
    }

    return state;
}