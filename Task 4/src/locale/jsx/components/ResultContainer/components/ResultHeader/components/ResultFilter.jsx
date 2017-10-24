import React from 'react';
import * as s from './ResultFilter.scss';
const allFilters = ['release date','rating'];
export default class ResultFilter extends React.Component {
    render() {
        let filters = allFilters.map(filter =>
            <span onClick={this.props.handlers.onFilterClick} data-value={filter} key={filter} className={s.filter + ' ' + (this.props.activeFilter === filter ? s.active : '')}>
                {filter}
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