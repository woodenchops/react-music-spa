import React from 'react';
import './Row.scss';
import Album from '../Albums/Albums';

const Row = ({sectionHeading, albums}) => {
    return ( 
        <div className="cp-row">
        {(sectionHeading) && (<h3 className="cp-row__title">{sectionHeading}</h3>)}
            <div className="cp-row__album-container">
                 {
                    albums.map((item, index) => (
                        <Album img={item.img} title={item.title} key={index}/>
                  ))
                 }   
            </div> 
        </div>
     );
}
 
export default Row;