import React from 'react';
import './App.css';
import Home from './components/Home'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    
  <div >   
    <Routes>  
    <Route
      exact path="/"
      element={<Home/>} 
    />
 
    </Routes>
  </div>

  );
}

export default App;
