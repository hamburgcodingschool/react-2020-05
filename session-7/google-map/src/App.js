import React from 'react'
import './App.css'
import GoogleMapReact from 'google-map-react'

export default function App() {
  const airPortHH = {
    id: 'airPortHH',
    lat: 53.633622,
    lng: 9.9952241,
  }

  const Marker = () => {
    return (
      <img
        src="https://img.icons8.com/dusk/64/000000/marker.png"
        alt=""
        style={{ position: 'absolute', left: '-32px', top: '-64px' }}
      />
    )
  }

  return (
    <div className="App">
      <div style={{ height: '100vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={airPortHH}
          defaultZoom={15}
        >
          <Marker lat={airPortHH.lat} lng={airPortHH.lng} />
        </GoogleMapReact>
      </div>
    </div>
  )
}
