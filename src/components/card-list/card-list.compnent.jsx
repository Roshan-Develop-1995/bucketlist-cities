import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card.component";

class CardList extends Component {
    render() {
        const { cities } = this.props;

        return (
            <div className='card-list'>
                {
                    cities.map(
                        (city) => {
                            const { id, cityName } = city;
                            return (
                                <Card city={city}/>
                            )
                        }
                    )
                }
            </div>
        )
    }
}

export default CardList;