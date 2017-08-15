import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './stores';
import App from './containers/App';
import './styles/index.scss';


const store = configureStore();
// Render the main component into the dom
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>
    
    , document.getElementById('root')
);
