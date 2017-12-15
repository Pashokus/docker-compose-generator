import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateConfig } from '../actions/docker';
import DockerItems from '../containers/DockerItems';
import Button from '../containers/Button';

class App extends Component {
    render() {
        const { generateConfig, dockerItems } = this.props;

        return (
            <div>
                <div className={'generate-button-section'} >
                    <h3>Добавьте как минимум один контейнер используя форму ниже, для создания конфига</h3>
                    <Button
                        name={'Generate'}
                        onClickHandler={generateConfig}
                        dockerItems={dockerItems}
                    />
                </div>
                <DockerItems />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dockerItems: state.docker.items
    }
};

export default connect(mapStateToProps, { generateConfig })(App);