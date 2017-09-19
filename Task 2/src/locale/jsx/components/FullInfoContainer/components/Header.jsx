import React from 'react';
import Button from '../../common/Button';
import * as s from './Header.scss';

export default class Header extends React.Component {
    render() {
        return (
            <div className={s.container}>
                <span className={s.logo}>netflixroulette</span>
                <Button style="middle" content="search"/>
            </div>
        )
    }
}