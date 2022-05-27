import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Product from './Product';
import {BrowseRouter as Router, Switch, Route}
from "react-router-dom";
function App() {
  return (
      <Router>
    <div className="app">
    
     
      <Header/>
      
      <Home/>
    </div>
    </Router>
  );
}

export default App;
