import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import FilmPage from './components/FilmPage';
import SearchPage from './components/SearchPage';


ReactDOM.render((
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={SearchPage}/>
                <Route path="/search/:query" component={SearchPage}/>
                <Route path="/film/:filmName" component={FilmPage}/>
            </Switch>
        </App>
    </Router>
), document.getElementById('root'));