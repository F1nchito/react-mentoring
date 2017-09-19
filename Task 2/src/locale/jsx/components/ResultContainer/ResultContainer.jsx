import React from 'react';
import ResultHeader from './components/ResultHeader/ResultHeader';
import ResultBody from './components/ResultBody/ResultBody';

export default class ResultContainer extends React.Component {
    render() {
        return (
            <div>
                <ResultHeader info={this.props.header.info} filter={this.props.header.filter}/>
                <ResultBody results={this.props.results}/>
            </div>
        )
    }
}