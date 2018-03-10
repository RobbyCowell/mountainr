import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import Store from './Store';

Store.subscribe(()=>{
    console.log('store changed', Store.getState());
});

ReactDOM.render(
    <Provider store={Store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
