import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Generator from './components/Generator';
import App from './components/App';
import Login from './components/auth/Login';
import SignUp from './components/auth/Signup';
import Profile from './components/Profile';
import RequireAuth from './components/auth/require-auth';
import AuthenticatedUser from './components/auth/auth-user';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Generator} />
        <Route path="profile" component={RequireAuth(Profile)} />
        <Route path="login" component={AuthenticatedUser(Login)} />
        <Route path="signup" component={AuthenticatedUser(SignUp)} />
    </Route>
);
