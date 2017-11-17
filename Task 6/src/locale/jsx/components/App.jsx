import React from 'react';
import {renderRoutes} from 'react-router-config';
import routes from '../routes/index';

export default class App extends React.Component{
    render(){
        return(
            <div>
                {renderRoutes(routes)}
            </div>
        )
    }
}