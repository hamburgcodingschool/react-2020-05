import React from 'react';
import './App.css';
import favoritePlacesData from './favorite-places.data'
import GoogleMapReact from 'google-map-react';

function App() {

  const showCoords= (event) => {
    console.log('lat ', event.lat, 'long ', event.lng)
  }

  return (
    <div className="App">
      <h1>Favorite Places</h1>
      <div className="mapWrapper">
      <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={favoritePlacesData[0]}
          defaultZoom={4}
          onClick={showCoords}
        >
          {favoritePlacesData.map(place => (
            <Marker lat={place.lat} lng={place.lng} />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
}

const Marker = () => {
  return <img src="https://img.icons8.com/dusk/64/000000/marker.png" alt="" className="marker" />
}
export default App;
