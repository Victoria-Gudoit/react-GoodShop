import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { App } from "./components/App"
import {BrowserRouter} from "react-router-dom"
import {store} from "store"
import './api/server'

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
