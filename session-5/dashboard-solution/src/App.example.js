import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Hello from './components/Hello'
import Bye from './components/Bye'
import Menu from './components/Menu'

function App() {
  return (
    <Router>
      <div className="App">
        <section className="sidebar">
          <Route path="/" component={Menu} />
        </section>
        <section className="main">
          <Route path="/" exact component={Hello} />
          <Route path="/bye" component={Bye} />
        </section>
      </div>
    </Router>
  );
}

export default App;
