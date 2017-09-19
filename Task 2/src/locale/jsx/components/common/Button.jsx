import React from 'react';
import * as s from './Button.scss';
export default class Button extends React.Component {
    render() {
        return (
            <button className={(this.props.style ? s[this.props.style] : '') + ' ' + (this.props.active === true ? s.active : '')}>
                {this.props.content}
            </button>
        )
    }
}