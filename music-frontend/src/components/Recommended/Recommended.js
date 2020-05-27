import React, { useContext, useEffect } from 'react';
import './Recommended.scss';
import {MasterContext} from '../../contexts/MasterContext';
import {RecommendedContext} from '../../contexts/RecommendedContext';
import Row from '../Row/Row';

const Recommended = () => {


    const {albums, setNewRecommended} = useContext(RecommendedContext);
    const {fetchData} = useContext(MasterContext);

    useEffect(() => {

        fetchData(`http://localhost:5000/api/recommeded`)
            .then((res) => {
                setNewRecommended(res);
            });

    }, [fetchData, setNewRecommended]);

    return ( 
        <section className="cp-recommended cp-album-row-section">
            {(albums) && (
                 <Row sectionHeading={`Recommended`} albums={albums}/>
            )}
        </section>
     );
}
 
export default Recommended;