import {search, sortFilter} from '../index';
import * as action from '../../actions/index';

const initalState = {
    searchFilter : 'title',
    isFetching: false,
    query : '',
    films : [],
    sortFilter : 'rating'
};

describe('search reducer', () => {
    it('should return the initial state', () =>{
        expect(search(undefined,{})).toEqual({searchFilter : initalState.searchFilter, query: initalState.query, isFetching : initalState.isFetching });
    });
    it('should handle SET_SEARCH_QUERY', () => {
        let query = 'avatar';
        expect(search(undefined, action.setSearchQuery(query))).toEqual({searchFilter : initalState.searchFilter, query: query, isFetching : initalState.isFetching })
    });
    it('should handle SEARCH_FILMS', () => {
        expect(search(undefined, action.searchFilms())).toEqual({searchFilter : initalState.searchFilter, query: initalState.query, isFetching : true })
    });
    it('should handle RECEIVE_FILMS', () => {
        let data = {test:'test'};
        expect(search(undefined, action.receiveFilms(data))).toEqual({searchFilter : initalState.searchFilter, query: initalState.query, isFetching : false , films: data})
    });
    it('should handle SET_SEARCH_FILTER', () => {
        let filter = 'director';
        expect(search(undefined, action.setSearchFilter(filter))).toEqual({searchFilter : filter, query: initalState.query, isFetching : initalState.isFetching })
    });
    it('should handle RECEIVE_FILM_DETAILS', () => {
        let data = {test:'test', details: {test:'test'}};
        expect(search(undefined, action.receiveFilmDetails(data))).toEqual({searchFilter : initalState.searchFilter, query: initalState.query, isFetching : false , FullInfoFilm: data})
    });
});
describe('sort filter', () =>{
    it('should return the initial state', () =>{
        expect(sortFilter(undefined,{})).toEqual(initalState.sortFilter);
    });
    it('should handle SET_SORT_FILTER', () => {
        let filter = 'rating';
        expect(sortFilter(undefined, action.setSortFilter(filter))).toEqual(filter);
    });
})