import React from 'react';
import * as s from './ResultBody.scss';
import ResultItem from './components/ResultItem';

export default class ResultBody extends React.Component {
    render() {
        let results,
            onFilmClick = this.props.onFilmClick,
            filter;
        if( this.props.results ){
            results = this.props.results;
            filter = this.props.activeFilter;
            results = results.sort(function (a,b) {
            if(filter === 'rating'){
                return b.vote_count - a.vote_count;
            }else if(filter === 'release date'){
                return new Date(b.release_date) - new Date(a.release_date);
            }
        });
        }
        
        return (
            <div className={s.container}>
                {results ?
                    results.map(((item)=><ResultItem onClick={onFilmClick} key={item.id} element={item}/>),this) :
                    <div className={s.emptyContainer}><span>No films found</span></div>
                }
            </div>
        )
    }
}