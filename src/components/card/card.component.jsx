import { Component } from "react";
import './card.styles.css';

const Card = ({ city: { id, cityName } }) => (
    <div className='card-container' key={id}>
        <img alt={`city ${cityName}`} src={`/assets/img/${cityName}.jpeg`} />
        <h2>{cityName}</h2>
        <p>India</p>
    </div>
);

export default Card;