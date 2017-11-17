import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FullDescription from '../FullDescription';

configure({adapter: new Adapter()});

const filmExample = {
    "adult": false,
    "backdrop_path": "/5XPPB44RQGfkBrbJxmtdndKz05n.jpg",
    "belongs_to_collection": {
        "id": 87096,
        "name": "Avatar Collection",
        "poster_path": "/nslJVsO58Etqkk17oXMuVK4gNOF.jpg",
        "backdrop_path": "/9s4BM48NweGFrIRE6haIul0YJ9f.jpg"
    },
    "budget": 237000000,
    "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        }
    ],
    "homepage": "http://www.avatarmovie.com/",
    "id": 19995,
    "imdb_id": "tt0499549",
    "original_language": "en",
    "original_title": "Avatar",
    "overview": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
    "popularity": 259.294872,
    "poster_path": "/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg",
    "production_companies": [
        {
            "name": "Ingenious Film Partners",
            "id": 289
        },
        {
            "name": "Twentieth Century Fox Film Corporation",
            "id": 306
        },
        {
            "name": "Dune Entertainment",
            "id": 444
        },
        {
            "name": "Lightstorm Entertainment",
            "id": 574
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        },
        {
            "iso_3166_1": "GB",
            "name": "United Kingdom"
        }
    ],
    "release_date": "2009-12-10",
    "revenue": 2787965087,
    "runtime": 162,
    "spoken_languages": [
        {
            "iso_639_1": "en",
            "name": "English"
        },
        {
            "iso_639_1": "es",
            "name": "Español"
        }
    ],
    "status": "Released",
    "tagline": "Enter the World of Pandora.",
    "title": "Avatar",
    "video": false,
    "vote_average": 7.2,
    "vote_count": 12423
};

function setup() {
    const props = {
        content: filmExample
    };
    const enzymeWrapper = shallow(<FullDescription {...props} />);
    return {props, enzymeWrapper};
}

describe('components', () => {
    describe('FullDescription', () => {
        it('should render FullDescription and subcomponents', () => {
            const {enzymeWrapper} = setup();
            expect(enzymeWrapper.find('img').props().src).toEqual('https://image.tmdb.org/t/p/w370_and_h556_bestv2'+filmExample.poster_path);
            expect(enzymeWrapper.find('h2').text()).toEqual(filmExample.title + filmExample.vote_average);
        });
        it('should render FullDescription when content havent poster', () => {
            const film = filmExample;
            film.poster_path = undefined;
            const wrapper = shallow(<FullDescription content={film}/>);
            expect(wrapper.find('img').props().src).toEqual('http://placehold.it/250x375/');
        })
        it('should render empty film on empty content', () => {
            const wrapper = shallow(<FullDescription/>);
            expect(wrapper.text()).toEqual('empty film');
        } )
    })
})