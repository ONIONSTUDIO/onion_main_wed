import React from "react";


export function Book(prop) {
    return(
        <div>
            <p>{prop.Name}</p>
            <p>{prop.Price}</p>
            <p>{prop.Category}</p>
            <pp>{prop.author}</pp>
        </div>
    )
}