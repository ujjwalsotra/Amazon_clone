import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Product from './Product';
import {BrowserRouter as Router, Routes, Route}
from "react-router-dom";
function App() {
  return (
      <Router>
    <div className="app">
    <Routes> {/* Previously was Switch */}
          <Route path="/checkout" element={[<Header/>,<h1>I am checkout</h1>]}>
        
      </Route>

      <Route path="/" element={[<Header/>,<Home/>]} >
          {/* When i am at this root render the header and home component*/}
       
       </Route>



    </Routes>
     
     
    </div>
    </Router>
  );
}

export default App;
