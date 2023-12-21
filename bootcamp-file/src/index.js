import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { createStore, combineReducers } from 'redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnJOKtEmy-2P9cYVTCSXBBpSzPN3iJtGk",
  authDomain: "bootcamp-6d8fe.firebaseapp.com",
  projectId: "bootcamp-6d8fe",
  storageBucket: "bootcamp-6d8fe.appspot.com",
  messagingSenderId: "234774164778",
  appId: "1:234774164778:web:95639a3005543fc6b11a53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase = app;

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
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

ReactDOM.render(
<Provider store={store}>
  <ReactReduxFirebaseProvider {...rrfProps}>
    <Router>
      <App />
    </Router>
  </ReactReduxFirebaseProvider>
</Provider>,
  document.getElementById('root')
);

