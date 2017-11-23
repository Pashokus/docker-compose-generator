import React, { Component } from 'react';

export default class AddDockerItem extends Component {
    constructor(props) {
        super(props);

        this.addClickHandler = this.addClickHandler.bind(this);
    }
    addClickHandler() {
        this.props.addDockerInstance();
    }

    render() {
        return <li className={'docker-item'} onClick={this.addClickHandler} />;
    }
}