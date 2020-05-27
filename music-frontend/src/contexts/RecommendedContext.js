import React, { Component, createContext } from 'react';

export const RecommendedContext = createContext();

export class RecommendedProvider extends Component {
    state = {
        albums: null,
        setNewRecommended: (res) => {
            this.setState({
                albums: res
            });

        }
    }

    render() { 
        return ( 
            <RecommendedContext.Provider value={{...this.state}}>
                {this.props.children}
            </RecommendedContext.Provider>
         );
    }
}
 
