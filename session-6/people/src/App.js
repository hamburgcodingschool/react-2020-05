import React, { useEffect, useState } from 'react'
import Person from './Person'
import './App.css'

export default function App() {
  const [people, setPeople] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        // data of people
        'https://api.npoint.io/bed2825be2fe6f570581'
      )
      const data = await response.json()
      console.log(data)
      setPeople([...data.people])
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>People</h1>
      {people.length && people.map((person, index) => (
        <Person person={person} key={index} />
      ))}
    </div>
  )
}
