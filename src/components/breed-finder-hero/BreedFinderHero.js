import React from 'react';
import './BreedFinderHero.css'

class BreedFinderHero extends React.Component {
    render() {
        return(
          <>
            <div className="finder-hero">
              <div className="finder-hero-title"> 
                <h1 id="finder-hero-header">What breed is that dog?</h1>
                <p id="finder-hero-paragraph">
                  Identify a dog's breed in just a few second. Upload a photo to try it.
                </p>
              </div>
            </div>
          </>
        )
    }
}

export default BreedFinderHero;