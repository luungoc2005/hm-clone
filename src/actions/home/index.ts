import * as constants from './constants'
import * as HNTypes from '../../middlewares/hnAPI/types'

export interface SelectFilter {
    type: constants.SELECT_FILTER,
    filter: FilterTypes,
}

export type FilterTypes = constants.FILTER_BEST | constants.FILTER_NEW | constants.FILTER_TOP;

export function selectFilter(filter: FilterTypes) : SelectFilter
{
    return {
        type: constants.SELECT_FILTER,
        filter
    }
}

export interface FetchItem {
    type: constants.FETCH_ITEM | constants.FETCH_ITEM_SUCCESS | constants.FETCH_ITEM_FAILURE,
    isFetching: boolean,
    id: number,
    payload: HNTypes.HNItem,
    error: string | null
}

export function fetchItem(id: number): FetchItem {
    return {
        type: constants.FETCH_ITEM,
        isFetching: true,
        id,
        payload: null,
        error: null
    }
}

export function fetchItemSuccess(id: number, payload: HNTypes.HNItem): FetchItem {
    return {
        type: constants.FETCH_ITEM_SUCCESS,
        isFetching: false,
        id,
        payload,
        error: null
    }
}

export function fetchItemFailure(id: number, error: string): FetchItem {
    return {
        type: constants.FETCH_ITEM_FAILURE,
        isFetching: false,
        id,
        payload: null,
        error
    }
}

export interface FetchChildren {
    type: constants.FETCH_CHILDREN,
    parentId: number
}

export function fetchChildren(parentId: number): FetchChildren {
    return {
        type: constants.FETCH_CHILDREN,
        parentId
    }
}