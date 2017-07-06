import { call, put, take, cancel, takeLatest, takeEvery } from 'redux-saga/effects';
import { Effect } from 'redux-saga';

import { getItem } from './index';

import { fetchItemSuccess, fetchItemFailure, FetchItem, FetchChildren } from '../../actions/home'
import { FETCH_ITEM, FETCH_CHILDREN } from '../../actions/home/actionTypes'
import * as types from './types';

import { LOCATION_CHANGE } from 'react-router-redux';

import { getStoreItem } from '../../reducers/home/selectors'

export function* loadItem(action: FetchItem): IterableIterator<Effect> {
    try {
        const response: types.HNItem = yield call(getItem, action.id);
        yield put(fetchItemSuccess(action.id, response));
    }
    catch (err) {
        yield put(fetchItemFailure(action.id, err));
    }
}

export function* loadChildren(action: FetchChildren): IterableIterator<Effect> {
    try {
        const children: types.HNItem[] = yield getStoreItem(action.parentId)
        children.forEach(element => {
            
        });
    }
    catch (err) {

    }
}

export function* watchForFetchItem(): IterableIterator<Effect> {
    const watcher = yield takeEvery(FETCH_ITEM, loadItem);

    yield take(LOCATION_CHANGE);
    yield cancel(watcher);
}

export function* watchForFetchChildren(): IterableIterator<Effect> {
    const watcher = yield takeLatest(FETCH_CHILDREN, loadChildren);

    yield take(LOCATION_CHANGE);
    yield cancel(watcher);
}