import React from 'react';
import * as s from './ResultHeader.scss'
import ResultFilter from './components/ResultFilter';
import ResultInfo from './components/ResultInfo';

export default class ResultHeader extends React.Component {
    render() {
        return (
            <div className={s.container}>
                {this.props.info ? <ResultInfo className={s.info} content={this.props.info}/> : null}
                {this.props.activeFilter ? <ResultFilter activeFilter={this.props.activeFilter} handlers={this.props.handlers}/> : null}
            </div>
        )
    }
}