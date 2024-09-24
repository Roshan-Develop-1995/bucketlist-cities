import { Component } from 'react';
import CardList from './components/card-list/card-list.compnent';
import './App.css';
import SearchBox from './components/search-box/search-box.components';

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

    const filteredCities = cities.filter(
      (city) => {
        return city.cityName.toLowerCase().includes(searchField);
      });

    return (
      <div className="App">
        <h1 className='app-title'>City Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder='search cities' className='cities-search-box'/>
        <CardList cities={filteredCities} />
      </div>
    );
  }
}

export default App;
