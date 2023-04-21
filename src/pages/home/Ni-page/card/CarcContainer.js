

import React from "react";
import { Card } from "./Card";
import cardData from "./cardData";

const CardElement = cardData.map(items =>
     <Card 
        key = {items.id}
        {...items}
        />)

export function CardContainer() {
    return(
        <div className="Card-container-main">
            {CardElement}
        </div>
    )
}