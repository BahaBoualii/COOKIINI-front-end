import React from 'react';
import './App.css';
import Navbar from './navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Contact from './pages/contact';
import Plans from './pages/plans';
import Community from './pages/community';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/community' element={<Community/>} />
          <Route path='/plans' element={<Plans/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
    </Router>
  );
}

export default App;