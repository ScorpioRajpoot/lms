import React from 'react'
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import logo from './media/image/logo.png';

import '../components/css/Nav.css'
export default function Nav() {
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [nav, setNav] = useState("50px");
  return (
    <>
      <nav style={{ height: nav }}>

        {/* <ul>
          <li> <NavLink to='/'>Home</NavLink> </li>
          <li><NavLink to='/User'>User</NavLink>
            <ul>
              <li> <NavLink to='/'>Admin</NavLink> </li>
              <li><NavLink to='/User'>Teacher</NavLink> </li>
              <li><NavLink to='/about'>Student</NavLink> </li>
            </ul>
          </li>
          <li><NavLink to='/about'>about</NavLink> </li>
        </ul> */}
        <div className='logo' >
          <img src={logo} alt="LOGO" />
        </div>

        <div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  setUserMenuActive(!userMenuActive);
                  setNav(userMenuActive ? "50px" : "100px");

                }}

              // onClick={() => {
              //   setUserMenuActive(!userMenuActive)
              // }

              >
                User
              </NavLink>
              {userMenuActive && (
                <ul>
                  <li>
                    <NavLink to="/Admin">Admin</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Teacher">Teacher</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Student">Student</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
          </ul>
        </div>
      </nav >
    </>
  )
}
