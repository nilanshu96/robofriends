import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import 'tachyons';
import './index.css';
import { searchRobots, fetchRobots } from './reducers';

// const logger = createLogger();
const rootReducer = combineReducers({searchRobots, fetchRobots});
// const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
