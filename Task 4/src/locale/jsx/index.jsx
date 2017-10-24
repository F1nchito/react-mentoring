import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/index'
import App from './components/App';
import FilmPage from './components/FilmPage';
import SearchPage from './components/SearchPage';


ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={SearchPage}/>
                    <Route path="/search/:query" component={SearchPage}/>
                    <Route path="/film/:filmName" component={FilmPage}/>
                </Switch>
            </App>
        </Router>
    </Provider>
), document.getElementById('root'));