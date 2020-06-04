import React from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import NewReleases from './components/NewReleases/NewReleases';
import Banner from './components/Banner/Banner';
import WeeklyPlayList from './components/WeeklyPlayList/WeeklyPlayList';
import Recommended from './components/Recommended/Recommended';

import { MasterProvider } from './contexts/MasterContext';
import { HeaderProvider } from './contexts/HeaderContext';
import { NewReleaseProvider } from './contexts/NewReleasesContext';
import { RecommendedProvider } from './contexts/RecommendedContext';
import { WeeklyPlaylistProvider } from './contexts/WeeklyPlaylistContext';
import { UserProvider } from './contexts/UserContext';


function App() {
  return (
    <div className="App">
          <MasterProvider>

            <UserProvider>
               <NavBar/>
            </UserProvider>
       
            <HeaderProvider>
              <Header/>
            </HeaderProvider>
   
            <NewReleaseProvider>
              <NewReleases/>
            </NewReleaseProvider>

            <RecommendedProvider>
              <Recommended/>
            </RecommendedProvider>

            <Banner/>

            <WeeklyPlaylistProvider>
               <WeeklyPlayList/>
            </WeeklyPlaylistProvider>
           

          </MasterProvider>
    </div>
  );
}

export default App;
