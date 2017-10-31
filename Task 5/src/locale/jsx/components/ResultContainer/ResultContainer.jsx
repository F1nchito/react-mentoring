import React from 'react';
import ResultHeader from './components/ResultHeader/ResultHeader';
import ResultBody from './components/ResultBody/ResultBody';

export default class ResultContainer extends React.Component {
    render() {
        return (
            <div>
                <ResultHeader info={this.props.headerInfo} activeFilter={this.props.headerFilter} handlers={this.props.handlers}/>
                <ResultBody results={this.props.results} activeFilter={this.props.headerFilter} onFilmClick={this.props.handlers.onFilmClick}/>
            </div>
        )
    }
}