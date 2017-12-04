import React, { Component } from 'react';
import AddInstanceForm from '../containers/AddInstanceForm';

export default class AddDockerItem extends Component {
    constructor(props) {
        super(props);

        this.addClickHandler = this.addClickHandler.bind(this);
    }

    addClickHandler() {
        console.log('clicked');
        //this.props.addDockerInstance();
    }

    render() {
        return (
            <li className='docker-item'>
                <div className='container'>
                    <AddInstanceForm onSubmit={this.props.addDockerInstance} />
                </div>
            </li>
        );
    }
}