import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink1,
  NavBtnLink2
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
            <img src={require('../assets/logo.png')} alt='logo' height={"70px"} width={"60px"} />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/community' activeStyle>
            Community
          </NavLink>
          <NavLink to='/plans' activeStyle>
            Plans
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink2 to='/signup'>Sign Up</NavBtnLink2>
          <NavBtnLink1 to='/login'>Log In</NavBtnLink1>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;