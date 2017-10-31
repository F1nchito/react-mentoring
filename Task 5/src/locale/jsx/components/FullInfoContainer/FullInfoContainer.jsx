import React from 'react';
import * as s from './FullInfoContainer.scss'
import Header from './components/Header/Header';
import FullDescription from './components/FullDescription/FullDescription';

export default class FullInfoContainer extends React.Component {
    render() {
        return (
            <div className={s.container}>
                <Header searchQuery={this.props.searchQuery}/>
                <FullDescription content={this.props.content}/>
            </div>
        )
    }
}