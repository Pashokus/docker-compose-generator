import React, { Component } from 'react';
import { connect } from 'react-redux';
import DockerItem from '../components/DockerItem';
import AddDockerItem from '../components/AddDockerItem';
import * as actions from '../actions/docker';
import '../components/dockerItem.scss';

class DockerItems extends Component {
    render() {
        const { dockerItems, addDockerInstance } = this.props;
        return (
            <div>
                <ul className={'docker-items'}>
                    <AddDockerItem addDockerInstance={addDockerInstance} />
                    { dockerItems.map(item => <DockerItem item={item} />) }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dockerItems: state.docker.items
    }
};

export default connect(mapStateToProps, actions)(DockerItems);

