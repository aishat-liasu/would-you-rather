import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import middleware from './middleware';
import reducer from './reducers';

const store = createStore(reducer, middleware);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
