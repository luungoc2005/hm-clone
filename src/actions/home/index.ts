import { FilterTypes } from './constants';
import * as actionTypes from './actionTypes';
import * as HNTypes from '../../middlewares/hnAPI/types';
import { BaseAction } from 'redux-actions';

export interface SelectFilter extends BaseAction {
    type: actionTypes.SELECT_FILTER,
    filter: FilterTypes,
}

export function selectFilter(filter: FilterTypes) : SelectFilter
{
    return {
        type: actionTypes.SELECT_FILTER,
        filter
    }
}

export interface FetchItem extends BaseAction {
    type: actionTypes.FETCH_ITEM | actionTypes.FETCH_ITEM_SUCCESS | actionTypes.FETCH_ITEM_FAILURE,
    isFetching: boolean,
    id: number,
    payload: HNTypes.HNItem,
    error: string | null
}

export function fetchItem(id: number): FetchItem {
    return {
        type: actionTypes.FETCH_ITEM,
        isFetching: true,
        id,
        payload: null,
        error: null
    }
}

export function fetchItemSuccess(id: number, payload: HNTypes.HNItem): FetchItem {
    return {
        type: actionTypes.FETCH_ITEM_SUCCESS,
        isFetching: false,
        id,
        payload,
        error: null
    }
}

export function fetchItemFailure(id: number, error: string): FetchItem {
    return {
        type: actionTypes.FETCH_ITEM_FAILURE,
        isFetching: false,
        id,
        payload: null,
        error
    }
}

export interface FetchChildren {
    type: actionTypes.FETCH_CHILDREN,
    parentId: number
}

export function fetchChildren(parentId: number): FetchChildren {
    return {
        type: actionTypes.FETCH_CHILDREN,
        parentId
    }
}

export type HomeActions = SelectFilter | FetchItem | FetchChildren;