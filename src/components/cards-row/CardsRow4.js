import React from "react";
import './CardsRow.css';
import Card from '../card/Card';

class CardRow4 extends React.Component {
    render() {
        return (
            <div className="content-cards-row">
                <Card
                    name={"Welsh Corgi"}
                    hypoallergenic={"No"}
                    lifeExpectancy={"12 – 15 years"}
                    colors={"Fawn, Sable, Black & Tan, Black & White, Red"}
                    origin={"Pembrokeshire, Wales"}
                    height={"36-43 cm"}
                    temperament={"Playful, Outgoing, Tenacious, Friendl"}
                    image={"images/welsh-corgi-pembroke-dog.jpeg"}
                />
                <Card
                    name={"Pomeranian"}
                    hypoallergenic={"Yes"}
                    lifeExpectancy={"12 – 16 years"}
                    colors={"Black, White, Apricot, Cream"}
                    origin={"Germany, Poland"}
                    height={"18-30 cm"}
                    temperament={" Playful, Extroverted, Intelligent, Friendly"}
                    image={"images/pomeranian.jpeg"}
                />
                <Card
                    name={"Pug"}
                    hypoallergenic={"No"}
                    lifeExpectancy={"12 – 15 years"}
                    colors={"Black, Fawn, Apricot, Silver Fawn"}
                    origin={"England, United Kingdom"}
                    height={"30 – 36 cm"}
                    temperament={" Charming, Clever, Playful, Mischievous, Stubborn"}
                    image={"images/pug-dog-white.jpeg"}
                />
            </div>
        )
    }
}

export default CardRow4;
