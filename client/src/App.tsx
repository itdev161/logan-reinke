import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [value, setValue] = useState(null);

  //I hope it's alright that I'm using a functional component here,
  //I only use functional components for my job and I really want to practice if possible.
  useEffect(() => {
    axios.get('http://localhost:5000')
      .then((response) => {
        setValue(response.data)
      })
      .catch((error) => {
        console.error({error});
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        GoodThings
      </header>
      {value}
    </div>
  );
}

export default App;
