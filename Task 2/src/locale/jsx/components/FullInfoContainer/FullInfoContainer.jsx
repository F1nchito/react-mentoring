import React from 'react';
import * as s from './FullInfoContainer.scss'
import Header from './components/Header';
import FullDescription from './components/FullDescription/FullDescription';

export default class FullInfoContainer extends React.Component {
    render() {
        return (
            <div className={s.container}>
                <Header/>
                <FullDescription content={this.props.content}/>
            </div>
        )
    }
}