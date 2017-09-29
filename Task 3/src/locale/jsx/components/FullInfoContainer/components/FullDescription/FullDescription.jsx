import React from 'react';
import * as s from './FullDescription.scss';

export default class FullDescription extends React.Component {
    render() {
        let item = this.props.content;
        return (
            item  ? (<div className={s.container}>
                <img src={item.img} alt=""/>
                <div className={s.container__description}>
                    <h2 className={s.description__title}>{item.title}<span className={s.description__rating}>{item.rating}</span></h2>
                    <p className={s.description__category}>{item.genre}</p>
                    <div className={s.description__time}>
                        <span>{item.year}</span>
                        <span className={s.time__duration}>{item.duration}</span>
                    </div>
                    <p className={s.description__full}>{item.description}</p>
                    <p className={s.description__director}>{item.director}</p>
                    <p className={s.description__cast}>{item.cast}</p>
                </div>
            </div>) : <div>empty film</div>
        )
    }
}