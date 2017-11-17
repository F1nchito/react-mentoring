import createPage from "../locale/html/createPage";
const express = require('express');
const cors = require('cors');
const path = require('path');
import React from 'react';
import {matchRoutes} from 'react-router-config';
import routes from '../locale/jsx/routes/index';
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import app from '../locale/jsx/reducers/index';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router-dom';
import App from '../locale/jsx/components/App';
import * as actions from '../locale/jsx/actions/index';

const server = express();

server.use(cors());
server.use(express.static(path.join(__dirname, `../../out/${process.env.NODE_ENV}/locale`)));

server.get('*', (req, res) => {
    const branch = matchRoutes(routes, req.url);
    let store = createStore(app,applyMiddleware(thunkMiddleware));
    let correctRoute = branch[0].match.params.hasOwnProperty('query') && branch[0].match.params.query;
    correctRoute && store.dispatch(actions.setSearchQuery(branch[0].match.params.query));
    let promises = branch.map(({route, match}) => {
        const {fetchData} = route.component;
        if(!(fetchData instanceof Function) || !correctRoute){
            return Promise.resolve(null);
        }
        return fetchData(store.dispatch,correctRoute);
    });
    let context = {};
    return Promise.all(promises)
        .then(() => {
            const body = renderToString(
                <Provider store={store}>
                    <StaticRouter location={req.url} context={context}>
                        <App/>
                    </StaticRouter>
                </Provider>
            );
            const html = createPage({body:body, state: store.getState()});
            res.send(html);
        });
});
server.listen(3000, message => {
    if (message) {
        console.log(message);
    } else {
        console.log('Server started');
    }
});

