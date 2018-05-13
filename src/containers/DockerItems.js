import React, { Component } from 'react';
import { connect } from 'react-redux';
import DockerItem from '../components/DockerItem';
import AddDockerItem from '../components/AddDockerItem';
import * as actions from '../actions/docker';
import '../components/styles/dockerItem.scss';

class DockerItems extends Component {
    componentWillReceiveProps() {}

    render() {
        const { dockerItems, addDockerInstance, deleteDockerItem } = this.props;
        return (
            <div>
                <ul className='docker-items'>
                    <AddDockerItem key='add-section' addDockerInstance={addDockerInstance} />
                    { Object.keys(dockerItems).map((itemId, id) => {
                        return <DockerItem key={id} item={dockerItems[itemId]} itemId={itemId} deleteDockerItem={deleteDockerItem} />;
                    }) }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dockerItems: state.docker.items
    };
};

export default connect(mapStateToProps, actions)(DockerItems);

