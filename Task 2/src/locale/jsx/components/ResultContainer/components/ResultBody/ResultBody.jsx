import React from 'react';
import * as s from './ResultBody.scss';
import ResultItem from './components/ResultItem';

export default class ResultBody extends React.Component {
    render() {
        return (
            <div className={s.container}>
                {this.props.results ?
                    this.props.results.map((item)=><ResultItem key={item.id} element={item}/>) :
                    <span>No films found</span>
                }
            </div>
        )
    }
}