import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Register from './components/Register';
import Login from './components/login';
import Saved from './components/saved'
import Albertsons from './components/albertsons';
import Broulims from './components/broulims';
import './App.css'





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/saved" element={<Saved/>} />
        <Route path="/albertsons" element={<Albertsons/>} />
        <Route path="/broulims" element={<Broulims/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;
