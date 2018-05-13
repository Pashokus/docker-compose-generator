import React from 'react';

export default function App(props) {
    return (
        <div className="generator-app">
            {props.children}
        </div>
    );
}
