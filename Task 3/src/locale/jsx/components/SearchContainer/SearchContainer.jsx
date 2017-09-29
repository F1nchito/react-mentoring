import React from 'react';
import * as s from './SearchContainer.scss';
import { Link } from 'react-router-dom';
import SearchField from './components/SearchField';
import SearchFilter from './components/SearchFilter';
import Button from '../common/Button';

export default class SearchContainer extends React.Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.container__logo}>netflixroulette</div>
                    <SearchField className={s.searchField} value={this.props.searchVal}/>
                    <div className={s.container__horizontal_block}>
                    <SearchFilter className={s.container__filter} />
                    <Link to={`/search/${this.props.searchVal}`}>
                        <Button style="big" active={true} content="search"/>
                    </Link>
                </div>
            </div>
        )
    }
}