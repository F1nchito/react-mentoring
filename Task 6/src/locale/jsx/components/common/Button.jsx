import React from 'react';
import * as s from './Button.scss';
export default class Button extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <button value={this.props.value} onClick={this.props.onClick} className={(this.props.style ? s[this.props.style] : '') + ' ' + (this.props.active === true ? s.active : '')}>
                {this.props.content}
            </button>
        )
    }
}