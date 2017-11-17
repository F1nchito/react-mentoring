import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import app from '../reducers/index';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// let store = createStore(app,applyMiddleware(thunkMiddleware));
export default (initState) => (createStore(app, initState, applyMiddleware(thunkMiddleware)));