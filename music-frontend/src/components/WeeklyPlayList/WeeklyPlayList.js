import React, { useContext, useEffect, Fragment } from 'react';
import './WeeklyPlayListStyles.scss';
import WeeklyPlayListCollection from './WeeklyPlayListCollection';

import { WeeklyPlaylistContext } from '../../contexts/WeeklyPlaylistContext';
import { MasterContext } from '../../contexts/MasterContext';

const WeeklyPlayList = () => {

    const {
        playlistOne, 
        playlistTwo,
        playlistAll, 
        setWeeklyPlaylist
    } = useContext(WeeklyPlaylistContext);

    const {fetchData} = useContext(MasterContext);

    useEffect(() => {

        fetchData(`http://localhost:5000/api/weekly-playlist`)
            .then((res) => {
                setWeeklyPlaylist(res);
            });

    }, [fetchData, setWeeklyPlaylist]);

    return ( 
        <section className="cp-weekly-playlist">
            <h3>Weekly Playlist</h3>
            <div className="cp-weekly-playlist__container">
                {(playlistAll) && (
                    <Fragment>
                        <WeeklyPlayListCollection playlist={playlistOne}/>
                        <WeeklyPlayListCollection playlist={playlistTwo}/>
                    </Fragment>
                )}     
            </div>
        </section>
     );
}
 
export default WeeklyPlayList;