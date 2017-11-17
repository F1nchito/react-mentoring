import FilmPage from '../components/FilmPage';
import SearchPage from '../components/SearchPage';

export default [
    {
        path: '/',
        exact: true,
        component: SearchPage
    },
    {
        path: '/search/:query',
        component: SearchPage
    },
    {
        path: '/film/:filmName',
        component: FilmPage
    }
];