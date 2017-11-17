import React from 'react';
import {connect} from 'react-redux';
import store from '../store/index';
import {setSearchFilter, setSearchQuery, fetchFilms, setSortFilter, fetchFilmDetails} from "../actions/index";
import SearchContainer from './SearchContainer/SearchContainer';
import ResultContainer from './ResultContainer/ResultContainer';

class SearchPageComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    static fetchData(dispatch,query){
        return dispatch(fetchFilms(query));
    }
    // componentDidMount() {
    //     if (this.props.match.params.query) {
    //         this.props.searchContainerHandlers.onChangeQuery(this.props.match.params.query);
    //         this.props.searchContainerHandlers.onSearchBtnClick();
    //     }
    // }

    render() {
        return (
            <div>
                <SearchContainer value={this.props.searchContainer} handlers={this.props.searchContainerHandlers}/>
                <ResultContainer headerInfo={this.props.resultContainer.films ? this.props.resultContainer.header.info : undefined} 
                                headerFilter={this.props.resultContainer.films ? this.props.resultContainer.header.filter : undefined}
                                 results={this.props.resultContainer.films}
                                 handlers={this.props.resultContainerHanlders}/> 
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        searchContainer: {
            activeFilter: state.search.searchFilter,
            searchQuery: state.search.query
        },
        resultContainer: {
            films: state.search.films,
            header: {
                info: state.search.films ? state.search.films.length + ' movies found' : undefined,
                filter: state.sortFilter
            }
        }
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        searchContainerHandlers:{
            onFilterClick: (filter) => {
            dispatch(setSearchFilter(filter))
        },
        onChangeQuery: (query) => {
            dispatch(setSearchQuery(query))
        },
        onSearchBtnClick: (query, searchFilter) => {
            dispatch(fetchFilms(query, searchFilter));
        }
        },
        resultContainerHanlders: {
            onFilterClick: (event) => {
                dispatch(setSortFilter(event.target.dataset.value));
            },
            onFilmClick : (id) => {
                dispatch(fetchFilmDetails(id));
            }
        }
    }
};
const SearchPage = connect(mapStateToProps, mapDispatchToProps)(SearchPageComponent);
export default SearchPage;