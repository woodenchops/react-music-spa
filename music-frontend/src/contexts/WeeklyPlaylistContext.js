import React, { Component, createContext } from 'react';

export const WeeklyPlaylistContext = createContext();

export class WeeklyPlaylistProvider extends Component {
    state = {
        playlistAll: null,
        playlistOne: null,
        playlistTwo: null,
        setWeeklyPlaylist: (res) => {
            const data = res;
            this.setState({
                playlistAll: [...data],
                playlistOne: [...data.splice(0, 5)],
                playlistTwo: [...data.splice(0, 5)]
            });

        }
    }

    render() { 
        return ( 
            <WeeklyPlaylistContext.Provider value={{...this.state}}>
                {this.props.children}
            </WeeklyPlaylistContext.Provider>
         );
    }
}
 
