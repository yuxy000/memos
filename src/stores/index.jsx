import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import reducer from '../reducers';

const configureStore = (initialState) => {
    const store = createStore(reducer, initialState, compose(
        applyMiddleware(thunk),
        typeof window.devToolsExtension === 'function' ? window.devToolsExtension() : f => f
    ));

    return store;
}

export default configureStore;