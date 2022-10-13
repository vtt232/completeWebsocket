import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import configStore from './sagas/configStore';

const store=configStore()





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <Provider store={store}>
            <App/>
        </Provider>

);


