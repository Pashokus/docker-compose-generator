import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './static/style.scss';
import { AUTH_USER } from './actions/types.js';
import Generator from './components/Generator.js';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/index.js'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Profile from './components/Profile.js';
import Login from './components/auth/Login.js';
import SignUp from './components/auth/Signup.js';


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})


const router = createBrowserRouter([
    {
        path: "/",
        element: <Generator />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
]);

const token = sessionStorage.getItem('token');

if (token) {
    store.dispatch({ type: AUTH_USER });
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
