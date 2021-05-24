import React from 'react';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import CardList from './components/CardList';
import { data } from './data';

const App = () => {

  //const [card, setCard] = useState(null);
  
  // useEffect(() => {
  //   console.log('test');
  //   fetch('https://afternoon-ridge-35420.herokuapp.com/partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter')
  //       .then(res => {
  //          res.json();
  //       })
  //       .then(data => {
  //         console.log(data)
  //         setCard(data);
  //       })
  // }, [])
  const [search, setSearch] = useState('');

  let searchField = (e)=> {
    console.log(e.target.value)
    const filteredArray = data.filter((data)=> {
      return data.Topic.toLowerCase().includes(e.target.value);
    })
    setSearch(filteredArray);
  }

  return (
    <div className="tc">
      <h1>9ijakids Game List</h1>
      <SearchBar search={search} searchChange={searchField}/>
      <CardList data={data}/>
    </div>
  );
}

export default App;
