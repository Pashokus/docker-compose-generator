import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions/index.js';
import Timer from './idle-timer.js';

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
                <li className="nav-item active navbar-right" key="profile">
                    <Timer>
                        <Link className="nav-link" to="/profile">{username}</Link>
                    </Timer>
                </li>,
                <li key="logoutButton" className="nav-item active navbar-right">
                    <a className="nav-link" role="button" onClick={this.props.logoutUser}>Log out</a>
                </li>,
            ];
        }

        return [
            <li className="nav-item active" key="loginButton">
                <Link className="nav-link" to="/login">Login</Link>
            </li>,
            <li className="nav-item active" key="signup-button">
                <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
        ];
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="nav justify-content-end">
                        {this.renderAuthButtons()}
                    </ul>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        user: state.auth.user
    };
}

export default connect(mapStateToProps, actions)(Header);

