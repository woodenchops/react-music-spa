import React from 'react';
import './NavMenu.scss';

const NavMenu = () => {

    return ( 
        <ul className="cp-nav__ul">
            <li className="p-nav__li">New Releases</li>
            <li className="p-nav__li">Reccomended</li>
            <li className="p-nav__li">Events</li>
            <li className="p-nav__li">Video</li>
        </ul>
     );
}
 
export default NavMenu;