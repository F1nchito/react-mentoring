import React from 'react';
import {connect} from 'react-redux';
import {fetchFilmDetails} from "../actions/index";
import FullInfoContainer from './FullInfoContainer/FullInfoContainer';
import ResultContainer from './ResultContainer/ResultContainer';


class FilmPageComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.match.params.filmName) {
            this.props.resultContainerHanlders.onFilmClick(this.props.match.params.filmName);
        }
    }

    render() {
        return (
            <div>
                <FullInfoContainer content={this.props.fullInfoContainer.fullInfoFilm} searchQuery={this.props.fullInfoContainer.searchQuery}/>
                <ResultContainer headerInfo={this.props.resultContainer.films ? this.props.resultContainer.header.info : undefined}
                                 results={this.props.resultContainer.films}
                                 handlers={this.props.resultContainerHanlders}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        resultContainer: {
            films:  state.search.FullInfoFilm && state.search.films ? state.search.films.filter(film => film.id !== state.search.FullInfoFilm.id) : null,
            header: {
                info: state.search.query ? 'Films by ' + state.search.query : undefined,
                filter: state.sortFilter
            }
        },
        fullInfoContainer:{
            searchQuery : state.search.query,
            fullInfoFilm : state.search.FullInfoFilm
        }
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        resultContainerHanlders: {
            onFilmClick : (id) => {
                dispatch(fetchFilmDetails(id));
            }
        }
    }
}
const FilmPage = connect(mapStateToProps, mapDispatchToProps)(FilmPageComponent);
export default FilmPage;