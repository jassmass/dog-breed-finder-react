import React from "react";
import './CardsRow.css';
import Card from '../card/Card';

class CardRow3 extends React.Component {
    render() {
        return (
            <div className="content-cards-row">
                <Card
                    name={"French bulldog"}
                    hypoallergenic={"No"}
                    lifeExpectancy={"10 – 14 years"}
                    colors={"White, Fawn, Brindle, Brindle & White"}
                    origin={"Franch, England"}
                    height={"46-55 cm"}
                    temperament={"  Bright, Playful, Easygoing, Affectionate"}
                    image={"images/-french-bulldog.jpeg"}
                />
                <Card
                    name={"Toy poodle"}
                    hypoallergenic={"Yes"}
                    lifeExpectancy={"12 – 15 years"}
                    colors={"=Black, White, Apricot,Cream"}
                    origin={"France, Germany"}
                    height={"24 – 28 cm"}
                    temperament={" Intelligent, Alert, Active, Trainable"}
                    image={"images/mini-poodle.png"}
                />
                <Card
                    name={"Papillon"}
                    hypoallergenic={"No"}
                    lifeExpectancy={"13 – 15 years"}
                    colors={" Black, White, Fawn, Chocolate, Cream"}
                    origin={"France, Spain"}
                    height={"20-28 cm"}
                    temperament={"Intelligent, Happy,<br/> Friendly"}
                    image={"images/papillon.png"}
                />
            </div>
        )
    }
}

export default CardRow3;

