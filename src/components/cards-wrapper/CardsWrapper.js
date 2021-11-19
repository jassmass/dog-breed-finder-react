import React from "react";
import './CardsWrapper.css';
import CardRow1 from "../cards-row/CardsRow1";
import CardRow2 from "../cards-row/CardsRow2";
import CardRow3 from "../cards-row/CardsRow3";
import CardRow4 from "../cards-row/CardsRow4";
import CardRow5 from "../cards-row/CardsRow5";

class CardsWrapper extends React.Component {
    render(){
        return (
            <div class="cards-wrapper">
                <CardRow1 />
                <CardRow2 />
                <CardRow3 />
                <CardRow4 />
                <CardRow5 />
            </div>
        )
    }
}

export default CardsWrapper;