import React from 'react';
import * as s from './ResultFilter.scss'
export default class ResultFilter extends React.Component {
    render() {
        let filters = this.props.filter.map(filter =>
            <span key={filter.label} className={s.filter + ' ' + (filter.active ? s.active : '')}>
                {filter.label}
            </span>
        );
        return (
            <div>
                <span>Sort by</span>
                {filters}
            </div>
        )
    }
}