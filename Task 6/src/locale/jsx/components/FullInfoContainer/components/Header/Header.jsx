import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../common/Button';
import * as s from './Header.scss';

export default class Header extends React.Component {
    render() {
        return (
            <div className={s.container}>
                <span className={s.logo}>netflixroulette</span>
                <Link to={`/search/${this.props.searchQuery}`}>
                <Button style="middle" content="search"/>
                </Link>
            </div>
        )
    }
}