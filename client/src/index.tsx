import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import React from 'react'

import AlertProvider from "./context/AlertContext";

import {Provider} from 'react-redux';
import store from './store';

import App from './App'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <AlertProvider>
              <Router>
                  <App />
              </Router>
          </AlertProvider>
      </Provider>
  </React.StrictMode>
)
