import React from 'react';
import * as s from './FullDescription.scss';

export default class FullDescription extends React.Component {
    render() {
        let item = this.props.content;
        let genres= '';
        if(item){
            item.genres.forEach(function(genre) {
            genres += ' ' + genre.name; 
        }, this);
        }
        return (
            item  ? (<div className={s.container}>
                <img src={item.poster_path ? 'https://image.tmdb.org/t/p/w370_and_h556_bestv2'+item.poster_path : 'http://placehold.it/250x375/'} alt=""/>
                <div className={s.container__description}>
                    <h2 className={s.description__title}>{item.title}<span className={s.description__rating}>{item.vote_average}</span></h2>
                    <p className={s.description__category}>{genres}</p>
                    <div className={s.description__time}>
                        <span>{item.release_date}</span>
                        <span className={s.time__duration}>{item.runtime} min</span>
                    </div>
                    <p className={s.description__full}>{item.overview}</p>
                    <p className={s.description__director}>{item.director}</p>
                    <p className={s.description__cast}>{item.cast}</p>
                </div>
            </div>) : <div>empty film</div>
        )
    }
}