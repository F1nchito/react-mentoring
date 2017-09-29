import React from 'react';
import FullInfoContainer from './FullInfoContainer/FullInfoContainer';
import ResultContainer from './ResultContainer/ResultContainer';


export default class FilmPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repo: {
                film: undefined,
                headerInfo: undefined,
                headerFilter: undefined,
                otherFilms: undefined
            }
        }
    }

    componentDidMount() {
        if (this.props.match.params.filmName) {
            let context = this;
            fetch('/api/film/' + this.props.match.params.filmName)
                .then(function (res) {
                    return res.json();
                })
                .then(function (data) {
                    context.setState({repo: data});
                });
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.filmName) {
            let context = this;
            debugger;
            fetch('/api/film/' + nextProps.match.params.filmName)
                .then(function (res) {
                    return res.json();
                })
                .then(function (data) {
                    context.setState({repo: data});
                });
        }
    }

    render() {
        return (
            <div>
                <FullInfoContainer content={this.state.repo.film}/>
                <ResultContainer headerInfo={this.state.repo.headerInfo} headerFilter={this.state.repo.headerFilter}
                                 results={this.state.repo.otherFilms}/>
            </div>
        )
    }
}