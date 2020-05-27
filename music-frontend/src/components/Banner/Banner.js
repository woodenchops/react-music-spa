import React from 'react';
import './BannerStyles.scss';
import BannerImage from '../../assets/images/drew-graham-338629.jpg';
import BannerPromo from './BannerPromo';
const Banner = () => {
    return ( 
        <section className="cp-banner" style={{backgroundImage: `url(${BannerImage})`}}>
            <BannerPromo/>
        </section>
     );
}
 
export default Banner;