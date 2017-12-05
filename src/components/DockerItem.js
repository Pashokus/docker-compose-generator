import React, { Component } from 'react';
import './styles/dockerItem.scss';
import closeImage from './styles/close.png';

export default class DockerItem extends Component {
    constructor(props) {
        super(props);

        this.deleteDockerItem = this.deleteDockerItem.bind(this);
    }

    deleteDockerItem() {
        const { itemId, deleteDockerItem } = this.props;

        deleteDockerItem(itemId);
    }

    render() {
        const { item, itemId } = this.props;
        return (
            <li key={itemId}>
                <div className='docker-item'>
                    <div className='close-button-container'>
                        <img
                            className='close-button'
                            alt='close_button'
                            src={closeImage}
                            onClick={this.deleteDockerItem}
                        />
                    </div>
                    <div>
                        <ul className='list-group custom-list-styles'>
                            {Object.keys(item).map((key) => {
                                return <li className='list-group-item'>
                                    <div>
                                        <span>{key}</span>
                                        <span> : </span>
                                        <span>{item[key]}</span>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </li>
        );
    }
}
