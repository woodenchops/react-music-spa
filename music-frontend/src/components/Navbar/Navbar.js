import React from 'react';
import './Navbar.scss';
import NavMenu from '../NavMenu/NavMenu';
import Profile from '../Profile/Profile';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
    return ( 
        <nav className="cp-nav">
            <div className="cp-nav__upper">
                <Profile/>
                <SearchBar/>
            </div>
            <NavMenu/>
        </nav>
     );
}
 
export default NavBar;