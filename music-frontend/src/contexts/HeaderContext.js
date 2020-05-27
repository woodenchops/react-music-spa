import React, { Component, createContext } from 'react';

export const HeaderContext = createContext();

export class HeaderProvider extends Component {
    state = {
        title: '',
        body: '',
        cta: {
            text: ''
        },
        img: '',
        setHeaderPromo: (res) => {
            this.setState({
                title: res[0].title,
                body: res[0].body,
                cta: {...this.state.cta, ...res[0].cta},
                img: res[0].img
            });
        }
    }

    render() { 
        return ( 
            <HeaderContext.Provider value={{...this.state}}>
                {this.props.children}
            </HeaderContext.Provider>
         );
    }
}
 
