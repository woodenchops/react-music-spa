import React from 'react';
import PlayButton from '../PlayButton/PlayButton';

const WeeklyCollectionRow = ({img, title, time, track}) => {
    return ( 
         <div className="cp-weekly-playlist__collection__row">
            <span className="track-id">{track}</span>
            <img src={img} alt="" className="thumbnail-image"/>
            <div className="artist-info">
                <span className="artist">Artist</span>
                <span className="song-name">{title}</span>
            </div>
            <span className="song-time">{time}</span>

            <PlayButton color="dark"/>
        </div>
     );
}
 
export default WeeklyCollectionRow;