import React from "react";
import './CardsRow.css';
import Card from '../card/Card';

class CardRow5 extends React.Component {
    render() {
        return (
            <div className="content-cards-row">
                <Card
                    name={"Jack russell terrier"}
                    hypoallergenic={"No"}
                    lifeExpectancy={"13 – 16 years"}
                    colors={"Black, Blue Roan, Orange Roan"}
                    origin={"United States, England"}
                    height={"34–38 cm"}
                    temperament={"Intelligent,Stubborn, Energetic, Fearless, Athletic"}
                    image={"images/jack russell terrier.jpeg"}
                />
                <Card
                    name={"Schnauzer"}
                    hypoallergenic={"Yes"}
                    lifeExpectancy={"12 – 15 years"}
                    colors={"Black, White,Salt & Pepper"}
                    origin={"Germany"}
                    height={"30–36 cm cm"}
                    temperament={" Intelligent,Obedient, Friendly, Fearless"}
                    image={"images/miniature-schnauzer.jpeg"}
                />
                <Card
                    name={"BeaYorkshire terriergle"}
                    hypoallergenic={"Yes"}
                    lifeExpectancy={"13 – 16 years"}
                    colors={"Blue & Tan, Black & Tan, Gold"}
                    origin={"England"}
                    height={"20-28 cm"}
                    temperament={" Intelligent, Bold, <br/>Independent, Confident"}
                    image={"images/Yokshire terrier.png"}
                />
            </div>
        )
    }
}

export default CardRow5;

