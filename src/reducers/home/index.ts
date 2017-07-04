import { FILTER_BEST } from '../../actions/home/constants';
import { HomeActions } from '../../actions/home';
import { HomeReducer } from './types';
import * as actionTypes from '../../actions/home/actionTypes';

const initialState: HomeReducer = {
    filter: FILTER_BEST,
    list: [],
    items: [],
};

export function homeReducer(
        state: HomeReducer = initialState, 
        action: HomeActions): HomeReducer {
    switch (action.type) {
        case actionTypes.SELECT_FILTER:
            state = {...state, filter: action.filter};
            break;

        case actionTypes.FETCH_ITEM:
            state = {...state}
        
        default:
            break;
    }

    return state;
}