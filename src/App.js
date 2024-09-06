import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      cities: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/v1/cities')
      .then((res) => res.json())
      .then((list) => this.setState(
        () => {
          return { cities: list }
        },
        () => {
          console.log(this.state);
        }
      ));
  }

  // Optimization - by not rendering extra anonymous function on rendering
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }


  render() {
    //For readability
    const { cities, searchField } = this.state;
    const { onSearchChange } = this;

    const fileteredCities = cities.filter(
      (city) => {
        return city.cityName.toLowerCase().includes(searchField);
      });

    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='search city'
          onChange={onSearchChange}
        />
        {
          fileteredCities.map(
            (city) => {
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
