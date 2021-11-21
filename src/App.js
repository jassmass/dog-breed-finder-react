import './App.css';
import React from 'react';
import NavigationBar from './components/navigation-bar/NavigationBar';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import CardsWrapper from './components/cards-wrapper/CardsWrapper';
import BreedFinder from './components/breed-finder/BreedFinder';

class App extends React.Component {
  render() {
    if (window.location.pathname === '/') {
      return (
        <div className="wrapper">
          <NavigationBar />
          <Hero />
          <CardsWrapper />
          <Footer />
        </div>
      );
    } else {
      return <BreedFinder />
    }
  }
}

export default App;
