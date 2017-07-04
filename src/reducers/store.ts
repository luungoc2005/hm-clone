import { createStore, combineReducers, compose, applyMiddleware, 
            Store, Reducer, Middleware, GenericStoreEnhancer } from 'redux';

import { fromJS } from 'immutable';
// Redux Middlewares
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { History } from 'history';

// Reducers
import { homeReducer } from './home';

const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();

const rootReducer: Reducer<{}> = combineReducers({
    homeReducer
});

export function configureStore(
        initialState: object = {}, 
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
        fromJS(initialState),
        composeEnhancers(...enhancers)
    );

    return store;
}