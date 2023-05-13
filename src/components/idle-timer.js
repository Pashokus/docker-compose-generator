import React, { Component } from 'react';
import IdleTimer from 'react-idle-timer';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/index.js';

class Timer extends Component {
    render() {
        const timerName = 'idleTimer';

        return (
            <IdleTimer
                ref={timerName}
                idleAction={() => {
                    this.props.logoutUser(true);
                }}
                timeout={1800000}
                format="MM-DD-YYYY HH:MM:ss.SSS"
            >{this.props.children}
            </IdleTimer>
        );
    }
}

export default connect(null, { logoutUser })(Timer);
