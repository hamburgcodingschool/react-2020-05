import React from 'react';
import './App.css';
import favoritePlacesData from './favorite-places.data'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

function App() {
  const keyConfig = { key: '' }
  const showCoords = (event) => {
    console.log('lat ', event.lat, 'long ', event.lng)
  }

  return (
    <div className="App">
      <h1>Favorite Places</h1>
      <div className="mapWrapper">
        <GoogleMapReact
          distanceToMouse={()=>{}}
          bootstrapURLKeys={keyConfig}
          defaultCenter={favoritePlacesData[0]}
          defaultZoom={4}
          onClick={showCoords}
        >
          {favoritePlacesData.map(place => (
            <Marker key={place.id} lat={place.lat} lng={place.lng} />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
}
export default App;
