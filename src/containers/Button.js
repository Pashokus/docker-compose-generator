import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        const { onClickHandler, dockerItems } = this.props;

        onClickHandler(dockerItems);
    }

    render() {
        const { name, dockerItems } = this.props;

        return (
            <button
                disabled={Object.keys(dockerItems).length === 0}
                className='btn btn-primary'
                onClick={this.onClickHandler}
            >
                {name}
            </button>
        );
    }
}