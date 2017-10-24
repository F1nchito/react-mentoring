
export const fetchFilms = (query, filter) => {
    return function(dispatch){
        dispatch(searchFilms(query));
        if(filter === 'title'){
            return fetch('https://api.themoviedb.org/3/search/movie?&api_key=0e17c92161eda91ae716ecd38c3a0e3b&query='+ query)
        .then(res => res.json())
        .then(function (data) {
            dispatch(receiveFilms(data.results));
        })
        }else if(filter === 'director'){
            return fetch('https://api.themoviedb.org/3/search/person?&api_key=0e17c92161eda91ae716ecd38c3a0e3b&query='+ query)
        .then(res => res.json())
        .then(function (data) {
            let movies = [];
            data.results.forEach(function(element) {
               movies =  movies.concat(element.known_for);
            }, this);
            dispatch(receiveFilms(movies));
        })
        }
        
    }
};
export const fetchFilmDetails = (id) => {
    return function(dispatch){
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0e17c92161eda91ae716ecd38c3a0e3b&language=en-US`)
        .then(res => res.json())
        .then(function (data) {
            dispatch(receiveFilmDetails(data));
        })
    }
};
export const searchFilms = (query) => {
    return{
        type: 'SEARCH_FILMS',
        query
    };
};
export const receiveFilmDetails = (data) => {
    return{
        type: 'RECEIVE_FILM_DETAILS',
        film: data
    }
};
export const receiveFilms = (data) => {
    return {
        type: 'RECEIVE_FILMS',
        films: data
    }
};


export const setSearchFilter = (filter) => {
    return {
        type: 'SET_SEARCH_FILTER',
        filter
    };
};
export const setSearchQuery = (query) => {
    return {
        type: 'SET_SEARCH_QUERY',
        query
    }
}
export const setSortFilter = (filter) => {
    return {
        type: 'SET_SORT_FILTER',
        filter
    };
};

