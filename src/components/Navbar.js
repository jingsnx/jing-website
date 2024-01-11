import React from 'react';
import {Link} from 'react-scroll'
import './Navbar.css'
import '../index.css'

export default function Navbar() {
    return (
        <div className='nav-header'>
            <nav className='navbar'>
              <Link smooth spy to='home' offset={-100} duration={500} className='logo'>
                j
              </Link>
              <ul className='nav-menu'>
                <li className='nav-item'>
                  <Link smooth spy to='home' offset={-100} duration={500}>
                    home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link smooth spy to='about' offset={-68} duration={500}>
                    about me
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link smooth spy to='projects' offset={-68} duration={500}>
                    projects
                  </Link>
                </li>
              </ul>
            </nav>
        </div>
    );
  }