import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import countReducer from './reducers';
import './index.css'

const store = createStore(countReducer)

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);
