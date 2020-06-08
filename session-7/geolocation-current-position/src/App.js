import React, { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [position, setPosition] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    const geo = navigator && navigator.geolocation
    if (!geo) {
      setError(`Browser doesn't support geolocation.`)
    }

    geo.getCurrentPosition(
      position => {
        setPosition(position.coords)
      },
      error => setError(error)
    )
  }, [])
  return (
    <div className="App">
      {position && (
        <div>
          Latitude: <span>{position.latitude}</span>
          <br />
          Longitude: <span>{position.longitude}</span>
        </div>
      )}
      {error && <div style={{ color: 'red' }}>{error.message}</div>}
    </div>
  )
}
