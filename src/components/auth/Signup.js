import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router';
import * as actions from '../../actions/index';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(formProps) {
        this.props.signUp(formProps);
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
            <div className="auth-container full">
                <div className="already-have-account">
                    <span><Link to="/login">Actually, I have an account. Log me in.</Link></span>
                </div>
                <div className="login-container">
                    <h2>Create Account</h2>
                    <form className="login-form" onSubmit={handleSubmit(this.handleFormSubmit)}>
                        <div>
                            <label>Email:</label>
                            <div>
                                <Field
                                    name="email"
                                    component="input"
                                    type="email"
                                    placeholder="name@email.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label>Username:</label>
                            <div>
                                <Field
                                    name="username"
                                    component="input"
                                    type="text"
                                    placeholder="your username here!"
                                />
                            </div>
                        </div>
                        <div>
                            <label>Password:</label>
                            <div>
                                <Field
                                    name="password"
                                    component="input"
                                    type="password"
                                    placeholder="your super secret passphrase"
                                />
                            </div>
                        </div>
                        <div>
                            <label>Confirm Password:</label>
                            <div>
                                <Field
                                    name="retypePassword"
                                    component="input"
                                    type="password"
                                    placeholder="confirm your passphrase"
                                />
                            </div>
                        </div>
                        {this.renderAlert()}
                        <div className="submit-container-alt">
                            <button className="submit" action="submit" disabled={pristine || submitting}>Create Account</button>
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

let form  =  reduxForm({
    form: 'signup'
})(Signup);

form = connect(mapStateToProps, actions)(form);

export default form;
