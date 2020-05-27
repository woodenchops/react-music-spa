import React, { useContext, useEffect } from 'react';
import {HeaderContext} from '../../../contexts/HeaderContext';
import { MasterContext } from '../../../contexts/MasterContext';

const HeaderPromo = () => {
    const {title, body, cta, img, setHeaderPromo} = useContext(HeaderContext);
    const {fetchData} = useContext(MasterContext);

    useEffect(() => {
        
        fetchData(`http://localhost:5000/api/header`)
            .then((res) => {
                setHeaderPromo(res);
        });
    }, [fetchData, setHeaderPromo]);


    return ( 
       (title) && (

        <article className="cp-header__promo">
            <div className="cp-header__promo__image">
                <img src={img} alt="promo"/>
            </div>
            <div className="cp-header__promo__copy">
                <h3>{title}</h3>
                <p>{body}</p>
                <button>{cta.text}</button>
            </div>
        </article>
        
        )
     );
}
 
export default HeaderPromo;