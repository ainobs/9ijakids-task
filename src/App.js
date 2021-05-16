import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';

const App = () => {

  const [card, setCard] = useState(null);
  
  useEffect(() => {
    console.log('test');
    fetch('http://bit.ly/TeaserTask')
        .then(res => {
           res.json();
        })
        .then(data => {
          setCard(data);
        })
  }, [])
  return (
    <div className="tc">
      <h1>9ijakids Game List</h1>
      {card && <Card card={card}/>}
    </div>
  );
}

export default App;
