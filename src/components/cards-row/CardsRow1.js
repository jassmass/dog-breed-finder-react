import React from "react";
import './CardsRow.css';
import Card from '../card/Card';

class CardRow extends React.Component {
    render() {
        return (
            <div className="content-cards-row">
                <Card
                    name={"Beagle"}
                    hypoallergenic={"No"}
                    lifeExpectancy={"12 – 15 years"}
                    colors={"Lemon & White, Tri-color, Chocolate"}
                    origin={"England, United Kingdom"}
                    height={"36–41 cm"}
                    temperament={" Amiable, Intelligent, Gentel"}
                    image={"images/Beagle-Dog-Transparent.png"}
                />
                <Card
                    name={"Boston Terrier"}
                    hypoallergenic={"No"}
                    lifeExpectancy={"13 – 15 years"}
                    colors={"Colors: Brindle & White, Seal & White, Black & White"}
                    origin={"United States"}
                    height={"38 – 43 cm"}
                    temperament={" Friendly, Intelligent, Lively"}
                    image={"images/pngwing.com.png"}
                />
                <Card
                    name={"Cairn Terrier"}
                    hypoallergenic={"Yes"}
                    lifeExpectancy={"12 – 15 years"}
                    colors={" Abundant shaggy outer coat, soft downy undercoat"}
                    origin={"Scotland"}
                    height={"23–33 cm"}
                    temperament={" Gay, Hardy, Assertive, Intelligentl"}
                    image={"images/cairn-terrier.jpeg"}
                />
            </div>
        )
    }
}

export default CardRow;


