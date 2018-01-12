import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateConfig } from '../actions/docker';
import DockerItems from '../containers/DockerItems';
import Button from '../containers/Button';

class App extends Component {
    render() {
        const { generateConfig, dockerItems, loading } = this.props;

        return (
            <div className={ loading ? 'app-container-loading' : ''}>
                <div className={'generate-button-section'} >
                    <h3>Добавьте как минимум один контейнер используя форму ниже, для создания конфига</h3>
                    <Button
                        name={'Сгенирировать'}
                        onClickHandler={generateConfig}
                        dockerItems={dockerItems}
                    />
                </div>
                <DockerItems />
                <div className={loading ? 'loading' : ''} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dockerItems: state.docker.items,
        loading: state.base.loading
    }
};

export default connect(mapStateToProps, { generateConfig })(App);