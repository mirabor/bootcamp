import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase/compat/app";
import "firebase/compat/database";

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';

const firebaseConfig = {
  apiKey: "AIzaSyCnJOKtEmy-2P9cYVTCSXBBpSzPN3iJtGk",
  authDomain: "bootcamp-6d8fe.firebaseapp.com",
  databaseURL: "https://bootcamp-6d8fe-default-rtdb.firebaseio.com",
  projectId: "bootcamp-6d8fe",
  storageBucket: "bootcamp-6d8fe.appspot.com",
  messagingSenderId: "234774164778",
  appId: "1:234774164778:web:95639a3005543fc6b11a53"
};

const app = firebase.initializeApp(firebaseConfig);
console.log('Firebase initialized:', app);
const database = app.database();
console.log('Firebase Database initialized:', database);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
});

// Create store with reducers and initial state
const store = createStore(rootReducer, composeWithDevTools());

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
};

const rrfProps = {
  firebase: app,
  database,
  config: rrfConfig,
  dispatch: store.dispatch,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);