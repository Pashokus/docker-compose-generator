import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateConfig, save } from '../actions/docker.js';
import DockerItems from '../containers/DockerItems.js';
import Button from '../containers/Button.js';
import DownloadLink from '../containers/DownloadLink.js';
import Header from './Header.js';

class Generator extends Component {
    renderSaveButton() {
        const { save, dockerItems } = this.props;

        return (
            <Button
                name="Save"
                onClickHandler={save}
                dockerItems={dockerItems}
            />
        );
    }

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
                        {
                            this.props.authenticated ? this.renderSaveButton() : ''
                        }
                        <DownloadLink />
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
        loading: state.base.loading,
        authenticated: state.auth.authenticated,
    };
};

export default connect(mapStateToProps, { generateConfig, save })(Generator);