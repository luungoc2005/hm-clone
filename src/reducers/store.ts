import { createStore, combineReducers, compose, applyMiddleware, 
            Store, Middleware, GenericStoreEnhancer } from 'redux';

// Redux Middlewares
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { History } from 'history';
import { RootState } from './types';

// Reducers
import { homeReducer } from './home';

import { FILTER_BEST } from '../actions/home/constants'

const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();

const rootReducer = combineReducers({
    home: homeReducer
});

const defaultState: RootState = {
    home: {
        filter: FILTER_BEST,
        list: [],
        items: [],
    }
}

export function configureStore(
        initialState: RootState = defaultState, 
        history: History): Store<{}> {

    const middlewares: Middleware[] = [
        sagaMiddleware,
        routerMiddleware(history),
    ];

    const enhancers: GenericStoreEnhancer[] = [
        applyMiddleware(...middlewares),
    ];

    const composeEnhancers: Function =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    
    const store: Store<{}> = createStore(
        rootReducer,
        initialState,
        composeEnhancers(...enhancers)
    );

    return store;
}