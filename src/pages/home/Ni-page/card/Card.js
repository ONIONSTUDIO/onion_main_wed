
import React from "react";
import { Link } from "react-router-dom";

export function Card(props) {
    function RouteToView() {
        <Link to='view'/>
    }
    return(
        <div className="Card-main" onClick={RouteToView}>
            {props.isUHD && <div className="card-badge">4k</div>}
            <img src={props.img} alt={props.alt} className="Card-image"/>
            <div>
                <h1>{props.title}</h1>
                <span><b>rate:</b> {props.rate}</span>
                <span>~ ~ </span>
                <span>OO</span>
            </div>
            <p><b>Plot:</b> {props.desp}</p>
            <p>welcome to cantiry</p>
        </div>
    )
}
