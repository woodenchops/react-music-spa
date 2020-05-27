import React, { Component, createContext } from 'react';

export const NewReleaseContext = createContext();

export class NewReleaseProvider extends Component {
    state = {
        albums: null,
        setNewReleases: (res) => {
            this.setState({
                albums: res
            });

        }
    }

    render() { 
        return ( 
            <NewReleaseContext.Provider value={{...this.state}}>
                {this.props.children}
            </NewReleaseContext.Provider>
         );
    }
}
 
