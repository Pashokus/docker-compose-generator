import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/index';
import Timer from './idle-timer';

class Header extends Component {
    componentWillMount() {
        if (sessionStorage.getItem('token')) {
            this.props.fetchUser();
        }
    }

    renderAuthButtons() {
        if (this.props.authenticated && this.props.user) {
            const { username } = this.props.user;
            return [
                <li key="profile" style={{ textTransform: 'capitalize' }}>
                    <Timer>
                        <Link to="/profile">{username}</Link>
                    </Timer>
                </li>,
                <li key="logoutButton">
                    <a role="button" onClick={this.props.logoutUser}>Log out</a>
                </li>,
            ];
        }

        return [
            <li key="loginButton">
                <Link to="/login">Login</Link>
            </li>,
            <li key="signup-button">
                <Link to="/signup">Sign Up</Link>
            </li>,
        ];
    }

    render() {
        return (
            <div className="header">
                <div className="main-nav">
                    <ul>
                        {this.renderAuthButtons()}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        seller: state.auth.user
    };
}

export default connect(mapStateToProps, actions)(Header);

