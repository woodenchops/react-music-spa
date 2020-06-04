import React, { Component, createContext } from 'react';

export const UserContext = createContext();

export class UserProvider extends Component {
    state = {
        userName: null,
        setUser: (res) => {
            this.setState({
                userName: res[0].userName
            });

        }
    }

    render() { 
        return ( 
            <UserContext.Provider value={{...this.state}}>
                {this.props.children}
            </UserContext.Provider>
         );
    }
}
 
