import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './static/style.scss';
import routes from './routes';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware =
  applyMiddleware(thunk, routerMiddleware(browserHistory))(createStore);
const store = createStoreWithMiddleware(reducers);
const history = syncHistoryWithStore(browserHistory, store);

const token = sessionStorage.getItem('token');

const renderHelper = () => {
    return (
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>
    );
};

if (token) {
    store.dispatch({ type: AUTH_USER });
}

render(renderHelper(), document.getElementById('app'));

