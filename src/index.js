import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
ReactDOM.render(
<Router> 
   <Provider store={store}>
    <App/>
   </Provider>
</Router>, document.getElementById('root'));

