import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/editor" element={<App />} />
      <Route path="/viewer" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
