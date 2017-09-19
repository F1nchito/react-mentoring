import React from 'react';
import SearchContainer from './SearchContainer/SearchContainer';
import ResultContainer from './ResultContainer/ResultContainer';

const header = {
    info: "7 movies found",
    filter:[{label: 'release date', active: false},{label:'rating', active: true}]
};
const films = [
    {
        id: 1,
        img: 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70153391.jpg',
        title: 'First',
        year : '2000',
        genre : 'Action'
    },
    {
        id: 2,
        img: 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70153391.jpg',
        title: 'Second',
        year : '2000',
        genre : 'Action'
    },
    {
        id: 3,
        img: 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70153391.jpg',
        title: 'Third',
        year : '2000',
        genre : 'Action'
    },
    {
        id: 4,
        img: 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70299043.jpg',
        title: 'Fourth',
        year : '2000',
        genre : 'Action'
    },
    {
        id: 5,
        img: 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70153391.jpg',
        title: 'Fifth',
        year : '2000',
        genre : 'Action'
    },{
        id: 6,
        img: 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70299043.jpg',
        title: 'Sixth',
        year : '2000',
        genre : 'Action'
    }
];

export default class Page1 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <SearchContainer />
            <ResultContainer header={header} results={films}/>
            </div>
        )
    }
}