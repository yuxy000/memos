import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './containers/App';
import './styles/index.scss';

// Render the main component into the dom
ReactDOM.render(
    <Router>
        <Route path="/" component={App} />
    </Router>
    , document.getElementById('root')
);
