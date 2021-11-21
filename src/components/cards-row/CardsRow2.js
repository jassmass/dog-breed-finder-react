import React from "react";
import './CardsRow.css';
import Card from '../card/Card';

class CardRow2 extends React.Component {
    render() {
        return (
            <div className="content-cards-row">
                <Card
                    name={"Chihuahua"}
                    hypoallergenic={"No"}
                    lifeExpectancy={"12 – 20 years"}
                    colors={" Black, White, Fawn, Chocolate, Cream"}
                    origin={"Mexico"}
                    height={"15–25 cm"}
                    temperament={"Temperament:  Aggressive, Devoted, Lively, Alert"}
                    image={"images/chihuahua.jpeg"}
                />
                <Card
                    name={"Cocker Spaniel"}
                    hypoallergenic={"No"}
                    lifeExpectancy={"12 – 15 years"}
                    colors={"Black, Blue Roan, Orange Roa"}
                    origin={"United Kingdom"}
                    height={"38–43 cm"}
                    temperament={" emperament: Playful, Affectionate, Friendly, Faithful"}
                    image={"images/cocker-spaniel.jpeg"}
                />
                <Card
                    name={"Dauchshund"}
                    hypoallergenic={"No"}
                    lifeExpectancy={"12 – 16 years"}
                    colors={"Black, Black & Tan, Chocolate & Tan"}
                    origin={"Germany"}
                    height={"28-36 cm"}
                    temperament={"Clever, Playful, Stubborn, Devoted"}
                    image={"images/dachshund_dog.png"}
                />
            </div>
        )
    }
}

export default CardRow2;
