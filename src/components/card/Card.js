import React from "react";
import './Card.css';

class Card extends React.Component {
    render() {
        return (
            <div className="content-card">
                <p className="content-card-name">{this.props.name}</p>
                <img src={this.props.image} alt="Beagle" className="card-image"/>
                <ul className="breed-caracterics">
                    <li> {`Hypoallergenic: ${this.props.hypoallergenic}`}</li>
                    <li> {`Life expectancy: ${this.props.lifeExpectancy}`}</li>
                    <li> {`Colors: ${this.props.colors}`}</li>
                    <li> {`Origin: ${this.props.origin}`}</li>
                    <li> {`Height: ${this.props.height}`}</li>
                    <li> {`Temperament: ${this.props.temperament}`}</li>
                </ul>
            </div>
        )
    }
}

export default Card;