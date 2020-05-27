import React from 'react';

const Album = ({img, title}) => {

    return ( 
        <div className="cp-row__album">
            <img src={img} alt=""/>
            <span className="album-title album-info">{title}</span>
            <span className="album-fine-print album-info">Lorem ipsum dolor sit!</span>
        </div>
     );
}
 
export default Album;