import React from 'react';
import './Result.css'

class Result extends React.Component {
    render() {

        let resultClass = 'result';
        if (this.props.isLast === true) {
            resultClass = 'last-result';
        }

        return(
            <div className={resultClass}>
              <h4 className="dog-bread" id="dogBread2">{this.props.dogBreed}</h4>
              <p className="probability" id="probability2">{this.props.probability}</p>
            </div>
        )
    }
}

export default Result;