import React from 'react';
import * as s from './SearchContainer.scss';
import {Link} from 'react-router-dom';
import SearchField from './components/SearchField';
import SearchFilter from './components/SearchFilter';
import Button from '../common/Button';

export default class SearchComponent extends React.Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.container__logo}>netflixroulette</div>
                <SearchField className={s.searchField} value={this.props.value.searchQuery} onChange={this.props.handlers.onChangeQuery} onEnter={this.props.handlers.onSearchBtnClick}/>
                <div className={s.container__horizontal_block}>
                    <SearchFilter className={s.container__filter} activeFilter={this.props.value.activeFilter} onClick={this.props.handlers.onFilterClick}/>
                    <Link to={`/search/${this.props.value.searchQuery}`}>
                        <Button style="big" active={true} content="search" onClick={this.props.handlers.onSearchBtnClick}/>
                    </Link>
                </div>
            </div>
        )
    }
}

