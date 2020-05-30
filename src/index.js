import React  from 'react';
import ReactDOM from 'react-dom';
import AppRootComponent from "./Home"
import { Provider } from 'react-redux';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.css';


const rootElement = document.getElementById('root');


ReactDOM.render((
  <Provider store={store}>
    <AppRootComponent />
  </Provider>
), rootElement);