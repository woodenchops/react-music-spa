import React from 'react';
import PlayButton from '../PlayButton/PlayButton';

const BannerPromo = () => {
    return ( 
        <div className="cp-banner__promo">
            <h3 className="cp-banner__promo__copy">Play High Voltage by ACDC</h3>
            <PlayButton/>
        </div>
     );
}
 
export default BannerPromo;