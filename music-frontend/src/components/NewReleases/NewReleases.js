import React, { useContext, useEffect } from 'react';
import './NewReleasesStyles.scss';
import Row from '../Row/Row';
import {MasterContext} from '../../contexts/MasterContext';
import { NewReleaseContext } from '../../contexts/NewReleasesContext';

const NewReleases = () => {

    const {albums, setNewReleases} = useContext(NewReleaseContext);
    const {fetchData} = useContext(MasterContext);

    useEffect(() => {

        fetchData(`http://localhost:5000/api/new-releases`)
            .then((res) => {
                setNewReleases(res);
            });

    }, [fetchData, setNewReleases]);

    return ( 
        <section className="cp-new-releases cp-album-row-section">
            {(albums) && (
                 <Row sectionHeading={`New Releases`} albums={albums}/>
            )}
        </section>
     );
}
 
export default NewReleases;