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
                    <div>
                        <img
                            className='close-button'
                            alt='close_button'
                            src={closeImage}
                            onClick={this.deleteDockerItem}
                        />
                    </div>
                    <div>
                        <ul>
                            {Object.keys(item).map((key) => {
                                return <li>
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
