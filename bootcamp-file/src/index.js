import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

