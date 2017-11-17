import { combineReducers } from 'redux';

const initalState = {
    searchFilter : 'title',
    isFetching: false,
    query : '',
    films : [],
    sortFilter : 'rating'
};

export const search = (state = {searchFilter : initalState.searchFilter, query: initalState.query, isFetching : initalState.isFetching }, action) => {
    switch (action.type){
        case 'SET_SEARCH_QUERY':
            return {...state, query: action.query};
            break;
        case 'SEARCH_FILMS':
            return {...state, isFetching: true};
            break;
        case 'RECEIVE_FILMS':
            return {...state, isFetching: false, films: action.films}
            break;
        case 'SET_SEARCH_FILTER':
            return {...state, searchFilter : action.filter};
            break;
        case 'RECEIVE_FILM_DETAILS' : 
            return {...state, isFetching: false, FullInfoFilm: action.film};
            break;
        default:
            return state;
            break;
    }
};
export const sortFilter = (state = initalState.sortFilter, action) => {
    switch (action.type) {
        case 'SET_SORT_FILTER':
            return action.filter;
            break;
    
        default:
            return state;
            break;
    }
}
 const app = combineReducers({search, sortFilter});
 export default app;