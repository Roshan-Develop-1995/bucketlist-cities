import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card.component";

const CardList = ({ cities }) => (
    <div className='card-list'>
        {cities.map((city) => {
            return (<Card city={city} key={city.id}/>)
        })}
    </div>
);
//Since have nothing else to return doing an implicit return

export default CardList;