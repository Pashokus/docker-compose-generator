import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Timer from '../idle-timer';

export default function (ComposedComponent) {
    class Authentication extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        if (!this.props.authenticated) {
            this.context.router.push('/');
        }
    }

    componentWillUpdate(nextProps) {
        if (!nextProps.authenticated) {
            this.context.router.push('/');
        }
    }

    render() {
        return (
            <Timer>
                <ComposedComponent {...this.props} />
            </Timer>
        );
    }
    }

    function mapStateToProps(state) {
        return {
            authenticated: state.auth.authenticated
        };
    }

    return connect(mapStateToProps)(Authentication);
}
