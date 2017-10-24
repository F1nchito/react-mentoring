import React from 'react';
import Button from '../../common/Button';
import {setSearchFilter} from "../../../actions/index";

const allFilters = ['title','director'];
export default class SearchFilter extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <p>search by</p>
                {
                    allFilters.map(filter =>
                    <Button key={filter} active={filter === this.props.activeFilter} style="small" content={filter} onClick={e => this.props.onClick(e.target.value)} value={filter}/>
                    )
                }
            </div>
        )
    }
}
