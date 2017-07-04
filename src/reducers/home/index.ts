import { fromJS } from 'immutable';

import { FilterTypes, FILTER_BEST } from '../../actions/home/constants';
import * as actionTypes from '../../actions/home/actionTypes';
import { HNItem } from '../../middlewares/hnAPI/types';
import { BaseAction } from 'redux-actions';

export interface HomeReducer {
    filter: FilterTypes,
    items: HNItem[],
}

const initialState: HomeReducer = fromJS({
    filter: FILTER_BEST,
    items: [],
});

export function homeReducer(
        state: HomeReducer = initialState, 
        action: BaseAction): HomeReducer {
    switch (action.type) {
        case actionTypes.SELECT_FILTER:

    }

    return state;
}