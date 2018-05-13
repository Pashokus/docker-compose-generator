import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateConfig } from '../actions/docker';
import DockerItems from '../containers/DockerItems';
import Button from '../containers/Button';
import Header from './Header';

class Generator extends Component {
    render() {
        const { generateConfig, dockerItems, loading } = this.props;

        return (
            <div>
                <Header />
                <div className={loading ? 'app-container-loading' : ''}>
                    <div className="generate-button-section" >
                        <h3>Add a least one container</h3>
                        <Button
                            name="Generate"
                            onClickHandler={generateConfig}
                            dockerItems={dockerItems}
                        />
                    </div>
                    <DockerItems />
                    <div className={loading ? 'loading' : ''} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dockerItems: state.docker.items,
        loading: state.base.loading
    };
};

export default connect(mapStateToProps, { generateConfig })(Generator);