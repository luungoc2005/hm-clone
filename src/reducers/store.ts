import { createStore, combineReducers, compose, applyMiddleware, 
            Store, Reducer, Middleware, GenericStoreEnhancer } from 'redux';

// Redux Middlewares
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { History } from 'history';

// Reducers
import { homeReducer } from './home';
import { HomeReducer } from './home/types';

const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();

interface RootReducer {
    home: HomeReducer
}

const rootReducer: RootReducer = {
    home: homeReducer,
};

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
        combineReducers<RootReducer>(rootReducer),
        initialState,
        composeEnhancers(...enhancers)
    );

    return store;
}