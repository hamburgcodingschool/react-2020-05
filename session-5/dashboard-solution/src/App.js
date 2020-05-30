import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Menu from './components/Menu'
import Hello from './components/Hello'
import Bye from './components/Bye'

function App() {
  return (
    <Router>

      <div className="App">
        <section className="sidebar">
          <h2>The Menu</h2>
          <Route path="/">
            <Menu />
          </Route>
        </section>
        <section className="main">
          <h2>The Main</h2>
          <Route path="/" exact >
            <Hello />
          </Route>
          <Route path="/bye" >
            <Bye />
          </Route>
        </section>
      </div>
    </Router>
  );
}

export default App;
