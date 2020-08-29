import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import IntroCardsContainer from './components/Cards/IntroCardsContainer';
import EventCardsContainer from './components/Cards/EventCardsContainer';
import LinkContainer from './components/List/LinkContainer';
import InfoHeader from './components/Header/InfoHeader';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <InfoHeader />
      <Header />
      <IntroCardsContainer />
      <EventCardsContainer />
      <LinkContainer />
    </div>
  );
}

export default App;
