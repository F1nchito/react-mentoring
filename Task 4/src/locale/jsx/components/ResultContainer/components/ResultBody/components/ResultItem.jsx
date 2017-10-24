import React from 'react';
import { Link } from 'react-router-dom';
import * as s from './ResultItem.scss';

const genres = [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ];
export default class ResultItem extends React.Component {
    render() {
        let item = this.props.element;
        let genre = genres.filter(elem => elem.id === item.genre_ids[0]);
        let year = item.release_date ? new Date(item.release_date).getFullYear() : new Date(item.first_air_date).getFullYear();
        let genreName = genre[0] ? genre[0].name : 'No genre';
        return (
            <Link onClick={()=>this.props.onClick(item.id)} className={s.links} to={`/film/${item.id}`}>
            <div className={s.container}>
                <img className={s.poster} src={item.poster_path ? 'https://image.tmdb.org/t/p/w370_and_h556_bestv2'+item.poster_path : 'http://placehold.it/250x375/'} alt={item.title}/>
                <div className={s.container__description}>
                    <div className={s.row}>
                        <span className={s.description__title}>{item.title}</span>
                        <span className={s.description__date}>{year}</span>
                    </div>
                    <span className={s.description__genre}>{genreName}</span>
                </div>
            </div>
            </Link>
        )
    }
}