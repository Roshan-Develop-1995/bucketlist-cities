import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      cities: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/v1/cities')
      .then((res) => res.json())
      .then((list) => this.setState(() => {
        return {cities: list}
      },
      () => {
        console.log(this.state);
      }
    ));
  }


  render() {
    return (
      <div className="App">
        {
          this.state.cities.map((city) => {
            return <div key={city.id}>
              <h1>{city.cityName}</h1>
            </div>
          })
        }
      </div>
    );
  }
}

export default App;
