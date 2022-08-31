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
import MyBasket from './pages/mybasket';
import MyProfile from './pages/myprofile';
import DeliveryDetails from './pages/deliveryDetatils';
import MyOrders from './pages/myorders';
import Confirmation from './pages/confirmation';
import MealDetails from './pages/mealDetatils';
import PlanNextStep from './pages/plannextstep';
import SignInOptions from './pages/signinoptions';
import MyRecipes from './pages/myrecipes';
import DetailedStats from './pages/detailed_stats';
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
          <Route path='/signup' element={<Signup browsing="true"/>} />
          <Route path='/forgotten_password' element={<ForgottenPw/>}/>
          <Route path='/meals' element={<Meals/>}/>
          <Route path='/basket' element={<MyBasket/>}/>
          <Route path='/profile' element={<MyProfile/>}/>
          <Route path='/delivery_details' element={<DeliveryDetails/>}/>
          <Route path='/orders' element={<MyOrders/>}/>
          <Route path='/confirmed_order' element={<Confirmation/>}/>
          <Route path='/mealname_details' element={<MealDetails/>}/>
          <Route path='/plan_next_step' element={<PlanNextStep/>}/>  
          <Route path='signin_options' element={<SignInOptions/>}/>
          <Route path='/my_recipes' element={<MyRecipes/>}/>
          <Route path='/detailed_stats' element={<DetailedStats/>}/>
          
        </Routes>
    </Router>
  );
}

export default App;