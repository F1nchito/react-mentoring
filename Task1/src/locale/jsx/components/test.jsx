import React from 'react';
import * as s from './test.scss';
import logo from '../../images/logo.png';

export default class Test extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
               <p className={s.mainContainer}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur animi maiores at ipsum, dolore itaque voluptatem odio placeat nemo quae.</p>
               <img src={logo} alt="webpack-logo"/> 
            </div>
        )
    }
}