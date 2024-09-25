import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.compnent';
import './App.css';
import SearchBox from './components/search-box/search-box.components';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState(cities);

  useEffect(() => {
    fetch('http://localhost:8080/v1/cities')
      .then((res) => res.json())
      .then((list) => setCities(list));
  }, [])

  useEffect(() => {
    const newFilteredCities = cities.filter(
      (city) => {
        return city.cityName.toLowerCase().includes(searchField);
      });
    setFilteredCities(newFilteredCities);
  }, [cities, searchField])

  const onSearchChange = (event) => {
    const updatedField = event.target.value.toLowerCase();
    setSearchField(updatedField);
  }

  return (
    <div className="App">
      <h1 className='app-title'>City Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange}
        placeholder='search cities'
        className='cities-search-box' />
      <CardList cities={filteredCities} />
    </div>
  )
}

export default App;
