import React from 'react';
import './App.css';
import Section from './section'

function App() {
  return (
    <div className="App">
      <h1 className="headline">Hello from Coding School</h1>
      <Section name="Mary" title="Der Titel" copy="Ein wenig Text" />
      <Section name="Christoph" title="Der zweite Titel" copy="...und noch ein wenig mehr Text." />
    </div>
  );
}

export default App;
