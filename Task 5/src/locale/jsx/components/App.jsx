import React from 'react';
import SearchContainer from './SearchContainer/SearchContainer';
import ResultContainer from './ResultContainer/ResultContainer';



export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            {this.props.children}
            </div>
        )
    }
}