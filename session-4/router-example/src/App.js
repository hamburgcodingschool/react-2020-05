import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact><Home /></Route>
        <Route path="/about" component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/contact/:userName" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
