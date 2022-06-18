import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Product from './Product';

import {BrowserRouter as Router, Routes, Route}
from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
function App() {
  return (
      <Router>
    <div className="app">
      <Header/>
    <Routes> {/* Previously was Switch */}
        <Route path="/login" element={[<Login/>]}>
        
        </Route>

          <Route path="/checkout" element={[<Checkout/>]}>
        
       </Route>

      <Route path="/" element={[<Home/>]} >
          {/* When i am at this root render the header and home component*/}
       
       </Route>



    </Routes>
     
     
    </div>
    </Router>
  );
}

export default App;
