import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Hello</Link>
        </li>
        <li>
          <Link to="/bye">Bye</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
