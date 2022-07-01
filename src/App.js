import React from 'react';
import './App.css';
import Navbar from './navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Contact from './pages/contact';
import Plans from './pages/plans';
import Community from './pages/community';
import Login from './pages/login';
import Signup from './pages/signup';
import ForgottenPw from './pages/forgottenpw';
import Meals from './pages/meals';
import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/community' element={<Community/>} />
          <Route path='/plans' element={<Plans/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/forgotten_password' element={<ForgottenPw/>}/>
          <Route path='/meals' element={<Meals/>}/>
          
        </Routes>
    </Router>
  );
}

export default App;