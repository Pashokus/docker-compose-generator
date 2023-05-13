import React, { Component } from 'react';

export default class Profile extends Component {
    render() {
        return (
            <RequireAuth>
                <div>Profile placeholder!</div>
            </RequireAuth>
        );
    }
}