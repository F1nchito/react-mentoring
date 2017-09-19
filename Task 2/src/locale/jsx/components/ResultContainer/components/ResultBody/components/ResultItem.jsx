import React from 'react';
import * as s from './ResultItem.scss';

export default class ResultItem extends React.Component {
    render() {
        let item = this.props.element;
        return (
            <div className={s.container}>
                <img src={item.img} alt=""/>
                <div className={s.container__description}>
                    <div className={s.row}>
                        <span className={s.description__title}>{item.title}</span>
                        <span className={s.description__date}>{item.year}</span>
                    </div>
                    <span className={s.description__genre}>{item.genre}</span>
                </div>
            </div>
        )
    }
}