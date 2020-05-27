import React from 'react';
import WeeklyCollectionRow from './WeeklyCollectionRow';

const WeeklyPlayListCollection = ({playlist}) => {
    return ( 
            <div className="cp-weekly-playlist__collection">
                {(playlist) && (
                    playlist.map((item) => (
                        <WeeklyCollectionRow img={item.img} title={item.title} time={item.time} track={item.track} key={item.track}/>
                    ))
                )}
            </div>
     );
}
 
export default WeeklyPlayListCollection;