import React from "react";
import pin from "../images/pin-bg.png"
export default function Card(props) {
    return (
    <div className="card">
        <img src={props.imageURL} className="card--picture"/>
        <div className="card--body">
            <div className="card--loc">
                <img src = {pin} className="card--loc-pin"/>
                <span className="card--loc-name">{props.location}</span> 
                <a href={props.mapURL} className="card--loc-map">View on Google Maps</a>
            </div>
            <h1 className="card--loc-title">{props.title}</h1>
            <p className="card--loc-dates"><strong>{props.startDate} - {props.endDate}</strong></p>
            <p className="card--loc-desc">{props.description}</p>
        </div>
    </div>
);

}