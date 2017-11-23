import React, { Component } from 'react';
import './dockerItem.scss';

export default class DockerItem extends Component {
    render() {
        const { item } = this.props;
        return <li key={item}>
            <div className={'docker-item'}>
                {this.props.item}
            </div>
        </li>
    }
}