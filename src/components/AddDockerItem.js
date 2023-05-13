import React, { Component } from 'react';
import AddInstanceForm from '../containers/AddInstanceForm.js';

export default class AddDockerItem extends Component {
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