import React from 'react';
import Button from '../../common/Button';

export default class SearchFilter extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <p>search by</p>
                <Button active={true} style="small" content='title'/>
                <Button style="small" content='director'/>
            </div>
        )
    }
}