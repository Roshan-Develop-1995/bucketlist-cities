import { Component } from "react";
import './card.styles.css';

class Card extends Component {
    render() {
        const {id, cityName} = this.props.city;
        return (
            <div className='card-container' key={id}>
                <img alt={`city ${cityName}`} src={`/assets/img/${cityName}.jpeg`} />
                <h2>{cityName}</h2>
                <p>India</p>
            </div>
        )
    }
}

export default Card;