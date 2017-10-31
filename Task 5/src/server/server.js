const express = require('express');
const cors = require('cors');
const path = require('path');
const server = express();

const repo = {
    films: [
        {
            id: 1,
            img: 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70153391.jpg',
            title: 'First',
            rating: '8.1',
            year: '2000',
            duration: '100 min',
            genre: 'Action',
            director : 'Tarantino',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, explicabo?',
            cast : 'Lorem ipsum dolor sit amet.'
        },
        {
            id: 2,
            img: 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70153391.jpg',
            title: 'Second',
            director : 'Tarantino',
            duration: '100 min',
            rating: '8.1',
            year: '2000',
            genre: 'Action',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, explicabo?',
            cast : 'Lorem ipsum dolor sit amet.'
        },
        {
            id: 3,
            img: 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70153391.jpg',
            title: 'Third',
            duration: '100 min',
            director : 'Tarantino',
            rating: '8.1',
            year: '2000',
            genre: 'Action',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, explicabo?',
            cast : 'Lorem ipsum dolor sit amet.'
        },
        {
            id: 4,
            img: 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70299043.jpg',
            title: 'Fourth',
            rating: '8.1',
            director : 'Tarantino',
            year: '2000',
            duration: '100 min',
            genre: 'Action',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, explicabo?',
            cast : 'Lorem ipsum dolor sit amet.'
        },
        {
            id: 5,
            img: 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70153391.jpg',
            title: 'Fifth',
            year: '2000',
            director : 'Tarantino',
            duration: '100 min',
            rating: '8.1',
            genre: 'Action',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, explicabo?',
            cast : 'Lorem ipsum dolor sit amet.'
        }, {
            id: 6,
            img: 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70299043.jpg',
            title: 'Sixth',
            director : 'Tarantino',
            year: '2000',
            rating: '8.1',
            duration: '100 min',
            genre: 'Action',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, explicabo?',
            cast : 'Lorem ipsum dolor sit amet.'
        }
    ]
}
server.use(cors());
server.use(express.static(path.join(__dirname, '../locale')));
server.listen(3000, message => {
    if (message) {
        console.log(message);
    } else {
        console.log('Server started');
    }
});
server.get('/api/film/:name', (req, res) => {
    let film = repo.films.filter(film => req.params.name === film.title);
    res.json({
        film: film[0],
        otherFilms: repo.films,
        info: 'Films by ' + req.params.name
    });
});
server.get('/api/search/:query', (req, res) => {
    res.json({
        films: repo.films,
        info: repo.films.length + ' movies found',
        headerFilter: [{label: 'release date', active: false}, {label: 'rating', active: true}]
    });
});
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../locale/index.html'));
});

