import './App.css';
import React from 'react';
import NavigationBar from './components/navigation-bar/NavigationBar';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import CardsWrapper from './components/cards-wrapper/CardsWrapper';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <NavigationBar />
        <Hero />
        <CardsWrapper />
        <Footer />
      </div>
    );
  }
}

export default App;
