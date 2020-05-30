import React, { useState } from 'react'
import './App.css'
import catImage from './cat.png'
export default function App() {
  // Move the cat by 10 pixels left or right, depending on the the tow buttons
  // click on bottom
  // a state 'position' is used move the cat to the right position.
  const [position, setPosition] = useState(window.innerWidth / 2 - 40)
  const moveBy = direction => setPosition(position + direction)
  return (
    <div>
      <img
        src={catImage}
        alt="cat"
        style={{
          position: 'absolute',
          left: position,
        }}
      />
      <div className="buttonWrapper">
        <button type="button" onClick={() => moveBy(-10)}>
          <span role="img" aria-label="move right">
            ↢
          </span>
        </button>
        <button type="button" onClick={() => moveBy(+10)}>
          <span role="img" aria-label="move right">
            ↣
          </span>
        </button>
      </div>
    </div>
  )
}
