import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';

import thunk from 'redux-thunk';

const configureStore=preloadedState=>{
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk)
        );
};
export default configureStore;