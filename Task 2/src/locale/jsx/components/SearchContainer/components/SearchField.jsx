import React from 'react';

export default class SearchField extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <p>find your movie</p>
                <input type="text" />
            </div>
        )
    }
}