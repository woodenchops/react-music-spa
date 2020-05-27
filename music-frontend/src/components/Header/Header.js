import React from 'react';
import './HeaderStyles.scss';
import HeaderImage from '../../assets/images/angello-lopez-182505.jpg';
import HeaderPromo from './HeaderPromo/HeaderPromo';

const Header = () => {

    const HeaderBackgroundStyles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 1)), url(${HeaderImage})`
    };

    return ( 
        <header className="cp-header" style={HeaderBackgroundStyles}>
            <HeaderPromo/>
        </header>
     );
}
 
export default Header;