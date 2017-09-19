import React from 'react';
import FullInfoContainer from './FullInfoContainer/FullInfoContainer';
import ResultContainer from './ResultContainer/ResultContainer';

const film = {
    imgSrc: 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70153391.jpg',
    title: "Pulp Fiction",
    rating: 4.1,
    category: "Oscar-winning Movies",
    year: "1994",
    duration : '154 min',
    description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam architecto beatae dolorum eum facere, fugit illo, laboriosam natus necessitatibus sit tenetur, ullam unde velit vero. A cupiditate dolor eligendi labore maiores minus sapiente voluptatum? Aspernatur corporis, eos itaque magnam nihil nobis obcaecati omnis quam quo totam unde vel voluptas!",
    director: "Quentin Tarantino",
    cast: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa cumque debitis earum, fugit magnam molestias quaerat ullam ut veniam.'
};
const header = {
    info: "Films by Quentin Tarantino"
}
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
        img: 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70153391.jpg',
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

export default class Page2 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <FullInfoContainer content={film}/>
                <ResultContainer  header={header} results={films}/>
            </div>
        )
    }
}