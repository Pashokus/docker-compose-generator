import React, { Component } from 'react';
import { connect } from 'react-redux';

class DownloadLink extends Component {
    render() {
        const { file } = this.props;

        if(file) {
            return (
                <a
                    href={`data:text/plain;charset=utf-8,${encodeURIComponent(file)}`}
                    download='docker-compose.yml'
                >docker-compose.yml</a>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        file: state.docker.file
    };
};

export default connect(mapStateToProps, null)(DownloadLink);