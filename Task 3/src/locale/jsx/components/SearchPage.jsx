import React from 'react';
import SearchContainer from './SearchContainer/SearchContainer';
import ResultContainer from './ResultContainer/ResultContainer';

export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repo: {
                headerInfo: undefined,
                headerFilter: undefined,
                films: undefined
            }
        }
    }

    componentDidMount() {
        if (this.props.match.params.query) {
            let context = this;
            fetch('/api/search/' + this.props.match.params.query)
                .then(function (res) {
                    return res.json();
                })
                .then(function (data) {
                    context.setState({repo: data})
                });
        }
    }

    render() {
        return (
            <div>
                <SearchContainer searchVal={this.props.match.params.query}/>
                <ResultContainer headerInfo={this.state.repo.headerInfo} headerFilter={this.state.repo.headerFilter}
                                 results={this.state.repo.films}/>
            </div>
        )
    }
}