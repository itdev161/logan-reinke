import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  const [value, setValue] = useState(null);

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
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>
            GoodThings
          </h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </header>
        <main>
          <Route exact path="/">
            {value}
          </Route>
            <Switch>
            <Route path="/register">
              Register
            </Route>
            <Route path="/login">
              Login
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
