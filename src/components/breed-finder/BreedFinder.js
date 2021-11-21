import React from 'react';
import NavigationBar from '../navigation-bar/NavigationBar';
import Footer from '../footer/Footer';
import BreedFinderHero from '../breed-finder-hero/BreedFinderHero';
import Classifier from '../classifier/Classifier';
import '../../App.css';

class BreedFinder extends React.Component {
    render() {
        return(
            <div className="wrapper">
                <NavigationBar />
                <BreedFinderHero />
                <Classifier />
                <Footer />    
            </div>
        )
    }
}

export default BreedFinder;