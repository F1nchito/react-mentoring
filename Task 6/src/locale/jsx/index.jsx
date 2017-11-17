import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/index'
import App from './components/App';

const preloadedStore = store(window.__PRELOADED_STATE__);
delete (window.__PRELOADED_STATE__);
ReactDOM.hydrate((
    <Provider store={preloadedStore}>
        <Router>
            <App/>
        </Router>
    </Provider>
), document.getElementById('root'));