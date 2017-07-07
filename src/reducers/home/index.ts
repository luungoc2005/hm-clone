import { FILTER_BEST } from '../../actions/home/constants';
import { HomeActions } from '../../actions/home';
import { HomeState } from './types';
import { HNItem } from '../../middlewares/hnAPI/types';
import * as actionTypes from '../../actions/home/actionTypes';

const initialState: HomeState = {
    filter: FILTER_BEST,
    selectedId: 0,
    list: [],
    items: [],
};

export function homeReducer(
        state: HomeState = initialState, 
        action: HomeActions): HomeState {
    switch (action.type) {
        case actionTypes.SELECT_FILTER:
            state = {...state, filter: action.filter};
            break;

        case actionTypes.SELECT_POST:
            state = {...state, selectedItem: action.selectedId};

        case actionTypes.FETCH_ITEM:
            state = {...state};

        case actionTypes.FETCH_ITEM_SUCCESS:
            state = updateItem(state, action.id, action.isFetching, {
                error: action.error,
                ...action.payload,
            });
        
        default:
            break;
    }

    return state;
}

function updateItem (
        state: HomeState, 
        itemId: number,
        isFetching: boolean,
        ...data: any[]): HomeState {
    const itemIndex = state.items.findIndex(item => item.id == itemId);

    const newItem: HNItem = {
        id: itemId,
        isFetching,
        ...data
    }

    if (itemIndex === -1) {
        state.items = [...state.items, newItem];
    }
    else {
        state.items = state.items.map((oldItem, index) => index === itemIndex? newItem: oldItem);
    }

    return state;
}