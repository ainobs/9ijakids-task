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
  const [game, setGame] = useState(data);
  const [search, setSearch] = useState('');

  let searchField = (event)=> {
    setSearch(event.target.value);
  }
  const filteredArray = game.filter((data)=> {
    return data.Topic.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className='f1'>9IJAKIDS GAME LIST</h1>
      <SearchBar searchChange={searchField}/>
      <CardList data={filteredArray}/>
    </div>
  );
}

export default App;
