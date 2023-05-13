import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/index.js';
import '../styles/login.scss';

class Login extends Component {
    constructor(props) {
        super(props);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit({ username, password }) {
        this.props.loginUser({ username, password });
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="error-message">
                    {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            <div className="form-signin">
                <div className="already-have-account">
                    <span><Link to="/signup">{'Actually, I don\'t have an account. Sign me up.'}</Link></span>
                </div>
                <div className="login-container">
                    <h2>Log into your Account</h2>
                    <form className="login-form" onSubmit={handleSubmit(this.handleFormSubmit)}>
                        <div>
                            <div className="form-group">
                                <label>Username:</label>
                                <Field
                                    className="form-control"
                                    name="username"
                                    component="input"
                                    type="test"
                                    placeholder="enter your username here"
                                />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <Field
                                    className="form-control"
                                    name="password"
                                    component="input"
                                    type="password"
                                    placeholder="enter your username here"
                                />
                            </div>
                        </div>
                        {this.renderAlert()}
                        <div className="submit-container">
                            <button
                                className="btn btn-primary"
                                action="submit"
                                disabled={pristine || submitting}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

let form = reduxForm({
    form: 'login'
})(Login);

export default connect(mapStateToProps, { loginUser })(form);
