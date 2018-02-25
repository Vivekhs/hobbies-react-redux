import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import LoginComponent from './components/common/LoginComponent';
import { Provider } from 'react-redux';
import Store from './store/Store';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <App>
            </App>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

