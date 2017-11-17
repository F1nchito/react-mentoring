import * as actions from '../index';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    afterEach(()=>{
        nock.cleanAll();
    });

    it('creates RECEIVE_FILMS with title filter when fetching films has been done', ()=> {
        const query = 'avatar';
        const filter = 'title';
        const store = mockStore({films: []});
        const expectedActions = [
            {
                type: 'SEARCH_FILMS',
                query
            },
            {
                type: 'RECEIVE_FILMS',
                films: [{title: 'Avatar', id: 19995, release_date:"2009-12-10" },
                    {title: 'Avatar 2', id: 76600, release_date: "2020-12-16"}]
            }
        ];
        nock('https://api.themoviedb.org')
            .get('/3/search/movie?&api_key=0e17c92161eda91ae716ecd38c3a0e3b&query='+ query)
            .reply(200, {
                total_results : 30,
                results : [{title: 'Avatar', id: 19995, release_date:"2009-12-10" },
                    {title: 'Avatar 2', id: 76600, release_date: "2020-12-16"}]
            });
        return store.dispatch(actions.fetchFilms(query, filter))
            .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            })
    });
    it('creates RECEIVE_FILMS with director filter when fetching films has been done', ()=> {
        const query = 'avatar';
        const filter = 'director';
        const store = mockStore({films: []});
        const expectedActions = [
            {
                type: 'SEARCH_FILMS',
                query
            },
            {
                type: 'RECEIVE_FILMS',
                films: [{title: 'Avatar', id: 19995, release_date:"2009-12-10" },
                    {title: 'Avatar 2', id: 76600, release_date: "2020-12-16"}]
            }
        ];
        nock('https://api.themoviedb.org')
            .get('/3/search/person?&api_key=0e17c92161eda91ae716ecd38c3a0e3b&query='+ query)
            .reply(200, {
                total_results : 30,
                results : [{known_for:{title: 'Avatar', id: 19995, release_date:"2009-12-10" }, name: 'Tarantino Petr'},
                    {known_for:{title: 'Avatar 2', id: 76600, release_date: "2020-12-16"}, name: 'Quentin Tarantino'}]
            });
        return store.dispatch(actions.fetchFilms(query, filter))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            })
    });
    it('creates RECEIVE_FILM_DETAILS when fetching films has been done', ()=> {
        const id = 10;
        const store = mockStore({film: undefined});
        const expectedActions = [
            {
                type: 'RECEIVE_FILM_DETAILS',
                film: {title: 'Avatar', id: 19995, release_date:"2009-12-10" }
            }
        ];
        nock('https://api.themoviedb.org')
            .get(`/3/movie/${id}?api_key=0e17c92161eda91ae716ecd38c3a0e3b&language=en-US`)
            .reply(200, {
                title: 'Avatar', id: 19995, release_date:"2009-12-10"
            });
        return store.dispatch(actions.fetchFilmDetails(id))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            })
    })
});

describe('set search filter', () => {
    it('should set new search filter', () => {
        const filter = 'director';
        const expectedAction = {
            type: 'SET_SEARCH_FILTER',
            filter
        }
        expect(actions.setSearchFilter(filter)).toEqual(expectedAction);
    })
});
describe('set search query', () => {
    it('should set new search query', () => {
        const query = 'tarantino';
        const expectedAction = {
            type: 'SET_SEARCH_QUERY',
            query
        }
        expect(actions.setSearchQuery(query)).toEqual(expectedAction);
    })
});

describe('set sort filter', () => {
    it('should set new sort filter', () => {
        const filter = 'rating';
        const expectedAction = {
            type: 'SET_SORT_FILTER',
            filter
        }
        expect(actions.setSortFilter(filter)).toEqual(expectedAction);
    })
});

describe('search films', () => {
    it('should search films with query', () => {
        const query = 'tarantino';
        const expectedAction = {
            type: 'SEARCH_FILMS',
            query
        }
        expect(actions.searchFilms(query)).toEqual(expectedAction);
    })
});

describe('receive film details', () => {
    it('should receive film with detail info', () => {
        const data = {
            title: 'Kill bill',
            img: 'placeholder.com/123.jpg'
        };
        const expectedAction = {
            type: 'RECEIVE_FILM_DETAILS',
            film: data
        }
        expect(actions.receiveFilmDetails(data)).toEqual(expectedAction);
    })
});

describe('receive films', () => {
    it('should receive films ', () => {
        const data = [{
            title: 'Kill bill',
            img: 'placeholder.com/123.jpg'
        },
            {
                title: 'Pulp fiction',
                img: 'placeholder.com/pulp.png'
            }];
        const expectedAction = {
            type: 'RECEIVE_FILMS',
            films: data
        }
        expect(actions.receiveFilms(data)).toEqual(expectedAction);
    })
});



