import React from 'react';

export default class ResultInfo extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <span>{this.props.content}</span>
            </div>
        )
    }
}