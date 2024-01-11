import React from 'react';
import {Link} from 'react-scroll'
import { useState } from 'react';
import './Navbar.css'
import '../../index.css'

export default function Navbar() {
    return (
        <div className='nav-header'>
            <nav className='navbar'>
              <Link className='logo'>
                J
              </Link>
              <ul className='nav-menu'>
                <li className='nav-item'>
                  <Link smooth spy to='home' offset={-100} duration={500}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link smooth spy to='about' offset={-100} duration={500}>
                    About
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link smooth spy to='projects' offset={-100} duration={500}>
                    Projects
                  </Link>
                </li>
              </ul>
            </nav>
        </div>
    );
  }